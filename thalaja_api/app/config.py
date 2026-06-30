"""
app/config.py
─────────────────────────────────────────────────────────
Centralized configuration for the Thalaja API.
Reads secrets from .env (via python-dotenv).
"""

import os
from pathlib import Path
from dotenv import load_dotenv

# ── Locate the project root (thalaja_api/) ──────────────
# config.py lives in app/, so parent.parent == project root
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")


# ══════════════════════════════════════════════════════════
# Base configuration — shared across all environments
# ══════════════════════════════════════════════════════════
class BaseConfig:
    """Default settings used by every environment."""

    # ── Flask core ──
    SECRET_KEY = os.getenv("SECRET_KEY", "change-me-to-a-random-secret-string")
    DEBUG = False
    TESTING = False

    # ── Database (Supabase PostgreSQL) ──
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_pre_ping": True,
        "pool_recycle": 300,
    }


# ══════════════════════════════════════════════════════════
# Environment-specific overrides
# ══════════════════════════════════════════════════════════
class DevelopmentConfig(BaseConfig):
    """Local development — verbose errors, debug mode ON."""
    DEBUG = True
    SQLALCHEMY_ECHO = False


class TestingConfig(BaseConfig):
    """Unit tests — in-memory SQLite, no external calls."""
    TESTING = True
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"


class ProductionConfig(BaseConfig):
    """Production — strict, no debug output."""
    DEBUG = False


# ══════════════════════════════════════════════════════════
# Registry — used by the app factory
# ══════════════════════════════════════════════════════════
config_by_name = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": ProductionConfig,
}


def get_config():
    """Return the config class matching FLASK_ENV (default: development)."""
    env = os.getenv("FLASK_ENV", "development")
    return config_by_name.get(env, DevelopmentConfig)
