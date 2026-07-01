"""Auth API namespace — US-01, US-02, US-36.

Endpoints (all under /api/v1/auth):
  POST /register      US-01  create account (name, phone, email, password)
  POST /login         US-02  login with email OR phone (Supabase session)
  POST /otp/verify    US-36  verify the OTP code (Authentica) -> phone_verified
  POST /otp/resend    US-36  resend OTP (Authentica; WhatsApp + email fallback)
  GET  /me            (demo of jwt_required; profile of current user)

OTP send/verify is handled by Authentica; identity & sessions by Supabase.
flask-restx api.model definitions double as the Swagger schemas at
/api/v1/docs.
"""
from flask import g
from flask_restx import Namespace, Resource, fields

from app.services.facade import get_facade
from app.services.providers.supabase_provider import SupabaseAuthError
from app.services.providers.authentica_provider import AuthenticaError
from app.api.v1.security import jwt_required

ns = Namespace("auth", description="Authentication & onboarding (US-01/02/36)")

# ── Swagger models ───────────────────────────────────────────
register_model = ns.model(
    "RegisterRequest",
    {
        "first_name": fields.String(required=True, example="Abdullah"),
        "last_name": fields.String(required=True, example="Al-Otaibi"),
        "email": fields.String(required=True, example="Ab@example.com"),
        "phone": fields.String(required=True, example="+966500000000"),
    },
)

login_model = ns.model(
    "LoginRequest",
    {
        # email OR phone — anything with '@' is treated as email
        "identifier": fields.String(required=True, example="Ab@example.com"),
    },
)

otp_verify_model = ns.model(
    "OtpVerifyRequest",
    {
        "phone": fields.String(required=False, example="+966500000000"),
        "email": fields.String(required=False, example="sara@example.com"),
        "token": fields.String(required=True, example="123456"),
    },
)

otp_resend_model = ns.model(
    "OtpResendRequest",
    {
        "phone": fields.String(required=True, example="+966500000000"),
    },
)


def _handle(fn):
    """Run a facade call and map provider errors to a clean HTTP error."""
    try:
        return fn()
    except (SupabaseAuthError, AuthenticaError) as e:
        ns.abort(e.status, e.message)


# ── US-01 ────────────────────────────────────────────────────
@ns.route("/register")
class Register(Resource):
    @ns.expect(register_model, validate=True)
    @ns.response(201, "Account created; OTP dispatched")
    @ns.response(400, "Validation or auth error")
    def post(self):
        data = ns.payload
        facade = get_facade()
        result = _handle(
            lambda: facade.register_user(
                first_name=data["first_name"],
                last_name=data["last_name"],
                email=data["email"],
                phone=data["phone"],
            )
        )
        return result, 201


# ── US-02 ────────────────────────────────────────────────────
@ns.route("/login")
class Login(Resource):
    @ns.expect(login_model, validate=True)
    @ns.response(200, "Login OK; returns Supabase session tokens")
    @ns.response(400, "Invalid credentials")
    def post(self):
        data = ns.payload
        facade = get_facade()
        session = _handle(
            lambda: facade.login(
                identifier=data["identifier"], password=data["password"]
            )
        )
        return session, 200


# ── US-36 ────────────────────────────────────────────────────
@ns.route("/otp/verify")
class OtpVerify(Resource):
    @ns.expect(otp_verify_model, validate=True)
    @ns.response(200, "OTP verified; phone marked verified")
    @ns.response(400, "Invalid or expired OTP")
    def post(self):
        data = ns.payload
        facade = get_facade()
        result = _handle(
            lambda: facade.verify_otp(
                phone=data.get("phone"),
                email=data.get("email"),
                token=data["token"],
            )
        )
        return result, 200


@ns.route("/otp/resend")
class OtpResend(Resource):
    @ns.expect(otp_resend_model, validate=True)
    @ns.response(200, "OTP re-dispatched via Authentica")
    def post(self):
        data = ns.payload
        facade = get_facade()
        result = _handle(lambda: facade.resend_otp(phone=data["phone"]))
        return result, 200


# ── demo of a protected route (not part of US-01/02/36 scope) ─
@ns.route("/me")
class Me(Resource):
    @ns.doc(security="Bearer")
    @jwt_required
    @ns.response(200, "Current user's profile")
    @ns.response(401, "Unauthorized")
    def get(self):
        facade = get_facade()
        user = facade.users.get_by_id(g.user_id)
        if not user:
            ns.abort(404, "Profile not found")
        return user.to_dict(), 200
