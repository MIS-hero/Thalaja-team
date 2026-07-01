"""Thin server-side client for Supabase Auth (GoTrue) REST.

The Flutter app never calls Supabase directly — it calls Flask, and this
provider is the only thing that talks to Supabase Auth. Used for:
  * US-01 sign-up (creates the auth identity)
  * US-02 password login (issues the session / JWT)

OTP is NOT handled here — it belongs to Authentica (see
authentica_provider.py). Supabase only owns the auth identity, sessions,
and the JWT the app sends back on protected routes.

Docs: https://supabase.com/docs/reference/auth  (GoTrue v2)
"""
import requests
from flask import current_app


class SupabaseAuthError(Exception):
    """Raised when Supabase returns a non-2xx auth response."""

    def __init__(self, message, status=400):
        super().__init__(message)
        self.message = message
        self.status = status


class SupabaseProvider:
    def __init__(self):
        cfg = current_app.config
        self.base_url = cfg["SUPABASE_URL"].rstrip("/")
        self.anon_key = cfg["SUPABASE_ANON_KEY"]
        self.service_key = cfg["SUPABASE_SERVICE_KEY"]

    # ── internal helpers ─────────────────────────────────────
    def _headers(self, service=False):
        key = self.service_key if service else self.anon_key
        return {
            "apikey": key,
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
        }

    def _post(self, path, payload, service=False):
        url = f"{self.base_url}/auth/v1{path}"
        resp = requests.post(url, json=payload, headers=self._headers(service), timeout=15)
        data = resp.json() if resp.content else {}
        if resp.status_code >= 400:
            msg = data.get("msg") or data.get("error_description") or data.get("error") or "Auth request failed"
            raise SupabaseAuthError(msg, status=resp.status_code)
        return data

    # ── US-01 : sign up (email + phone + metadata) ───────────
    def sign_up(self, email, phone, password, first_name, last_name):
        """Create the Supabase auth user (identity only).

        OTP verification is handled separately by Authentica (US-36); this
        just establishes the identity and stores the name in user_metadata.
        """
        payload = {
            "email": email,
            "password": password,
            "phone": phone,
            "data": {"first_name": first_name, "last_name": last_name},
        }
        return self._post("/signup", payload)

    # ── US-02 : login with email OR phone ────────────────────
    def sign_in_password(self, identifier, password, is_phone):
        key = "phone" if is_phone else "email"
        payload = {key: identifier, "password": password}
        return self._post("/token?grant_type=password", payload)
