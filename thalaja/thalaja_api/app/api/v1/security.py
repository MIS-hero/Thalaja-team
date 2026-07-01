"""JWT verification for Supabase-issued access tokens.

After login/OTP-verify, Supabase hands the Flutter app an access token
(a JWT signed with the project's JWT secret). The app sends it as
`Authorization: Bearer <token>` on protected routes. This decorator
verifies the signature/expiry and stashes the user id on `flask.g`.

Used by protected endpoints (none required for US-01/02/36 themselves,
but `/auth/me` demonstrates it and later stories will rely on it).
"""
from functools import wraps

import jwt
from flask import current_app, g, request
from flask_restx import abort


def _extract_token():
    header = request.headers.get("Authorization", "")
    if not header.startswith("Bearer "):
        return None
    return header.split(" ", 1)[1].strip()


def jwt_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = _extract_token()
        if not token:
            abort(401, "Missing or malformed Authorization header")
        try:
            payload = jwt.decode(
                token,
                current_app.config["SUPABASE_JWT_SECRET"],
                algorithms=["HS256"],
                audience=current_app.config["SUPABASE_JWT_AUDIENCE"],
            )
        except jwt.ExpiredSignatureError:
            abort(401, "Token expired")
        except jwt.InvalidTokenError as e:
            abort(401, f"Invalid token: {e}")

        # Supabase puts the auth UID in `sub`.
        g.user_id = payload.get("sub")
        g.jwt_payload = payload
        return fn(*args, **kwargs)

    return wrapper
