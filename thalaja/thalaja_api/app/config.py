"""Configuration objects for the Thalaja API.

All secrets are read from environment variables (see .env.example).
Never hard-code keys here.
"""
import os


class Config:
    # ── Flask ────────────────────────────────────────────────
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY", "change-me-in-prod")

    # ── SQLAlchemy → Supabase Postgres ───────────────────────
    # Use the *connection pooler* string from Supabase:
    #   Project Settings → Database → Connection string → URI (pooler, 6543)
    # Example:
    #   postgresql+psycopg2://postgres.<ref>:<password>@aws-0-<region>.pooler.supabase.com:6543/postgres
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {"pool_pre_ping": True}

    # ── Supabase Auth (server-side) ──────────────────────────
    SUPABASE_URL = os.getenv("SUPABASE_URL", "")
    # anon key: used for password/OTP sign-in & sign-up on behalf of the user
    SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
    # service-role key: used ONLY for trusted admin ops (never exposed to client)
    SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")
    # The JWT secret from Supabase (Settings → API → JWT Settings) — used to
    # verify access tokens that the Flutter app sends in the Authorization header.
    SUPABASE_JWT_SECRET = os.getenv("SUPABASE_JWT_SECRET", "")
    SUPABASE_JWT_AUDIENCE = os.getenv("SUPABASE_JWT_AUDIENCE", "authenticated")

    # ── Authentica (OTP provider for US-36) ──────────────────
    # https://authentica.sa  — owns OTP send + verify.
    AUTHENTICA_BASE_URL = os.getenv("AUTHENTICA_BASE_URL", "https://api.authentica.sa")
    AUTHENTICA_API_KEY = os.getenv("AUTHENTICA_API_KEY", "")
    # Primary channel; Authentica handles fallback to email itself.
    AUTHENTICA_OTP_METHOD = os.getenv("AUTHENTICA_OTP_METHOD", "whatsapp")
    AUTHENTICA_TEMPLATE_ID = int(os.getenv("AUTHENTICA_TEMPLATE_ID", "11"))
    AUTHENTICA_FALLBACK_EMAIL = os.getenv(
        "AUTHENTICA_FALLBACK_EMAIL", "zaytona.team@gmail.com"
    )


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False


config_by_name = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
}


def get_config():
    return config_by_name.get(os.getenv("FLASK_ENV", "development"), DevelopmentConfig)
