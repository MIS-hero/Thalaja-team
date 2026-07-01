"""ThalajaFacade — the single orchestration layer (HBnB-style).

The API namespaces never touch providers or repositories directly; they
call the facade, which coordinates:
  * Supabase Auth  — identity (US-01 sign-up) and sessions/JWT (US-02 login)
  * Authentica     — OTP send + verify (US-36); WhatsApp with email fallback
                     handled by Authentica itself via `fallback_email`
  * UserRepository — the local profile mirror + phone_verified flag

Important: Authentica and Supabase are independent. Verifying an OTP does
NOT create a Supabase session; it only flips `phone_verified`. The app
gets its session/JWT from password login (US-02).
"""
import logging

from app.persistence.repositories.user_repository import UserRepository
from app.services.providers.supabase_provider import SupabaseProvider, SupabaseAuthError
from app.services.providers.authentica_provider import AuthenticaProvider, AuthenticaError

logger = logging.getLogger("thalaja.facade")


class ThalajaFacade:
    def __init__(self):
        self.users = UserRepository()
        self.supabase = SupabaseProvider()
        self.authentica = AuthenticaProvider()

    # ── US-01 : register ─────────────────────────────────────
    def register_user(self, *, first_name, last_name, email, phone, password):
        """Create the Supabase auth identity, mirror a profile row, then
        send the phone OTP through Authentica (WhatsApp + email fallback)."""
        result = self.supabase.sign_up(
            email=email,
            phone=phone,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        user_obj = result.get("user") or result
        user_id = user_obj.get("id")
        if not user_id:
            raise SupabaseAuthError("Sign-up did not return a user id", status=502)

        self.users.create(
            user_id=user_id,
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
        )

        # US-36 — Authentica sends OTP (WhatsApp, falls back to email itself).
        send = self.authentica.send_otp(phone=phone)

        return {
            "user_id": user_id,
            "email": email,
            "phone": phone,
            "otp_sent": send["success"],
            "otp_method": send["method"],
            "message": "Account created. Verify the OTP we just sent.",
        }

    # ── US-36 : OTP send / resend (Authentica) ───────────────
    def dispatch_otp(self, *, phone):
        return self.authentica.send_otp(phone=phone)

    def resend_otp(self, *, phone):
        send = self.dispatch_otp(phone=phone)
        return {"otp_sent": send["success"], "otp_method": send["method"]}

    # ── US-36 : verify OTP (Authentica) ──────────────────────
    def verify_otp(self, *, phone, email, token):
        """Verify the code with Authentica. On success, flip phone_verified.

        Returns a small status dict — NOT a session. The app logs in
        (US-02) to obtain a Supabase session/JWT.
        """
        ok = self.authentica.verify_otp(otp=token, phone=phone, email=email)
        if not ok:
            raise AuthenticaError("Invalid or expired OTP", status=400)

        updated = None
        if phone:
            updated = self.users.mark_phone_verified(phone=phone)

        return {
            "verified": True,
            "phone": phone,
            "phone_verified": bool(updated.phone_verified) if updated else None,
            "message": "Phone verified. You can now log in.",
        }

    # ── US-02 : login (Supabase) ─────────────────────────────
    def login(self, *, identifier, password):
        """Login with email OR phone. Anything containing '@' is an email,
        else a phone. Returns the Supabase session (access/refresh tokens)."""
        is_phone = "@" not in identifier
        return self.supabase.sign_in_password(
            identifier=identifier, password=password, is_phone=is_phone
        )


_facade = None


def get_facade() -> "ThalajaFacade":
    global _facade
    if _facade is None:
        _facade = ThalajaFacade()
    return _facade
