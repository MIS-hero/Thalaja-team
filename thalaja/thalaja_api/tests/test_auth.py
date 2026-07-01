"""Smoke tests for the auth namespace (US-01/02/36).

These use Flask's test client and monkeypatch the facade so they run
without a live Supabase connection. Run with: pytest
"""
import json
import pytest

from app import create_app
from app.config import Config


class TestConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"


@pytest.fixture
def client(monkeypatch):
    app = create_app(TestConfig)
    return app.test_client()


def test_register_validates_payload(client):
    # missing fields -> 400 from flask-restx validation
    resp = client.post("/api/v1/auth/register", json={"email": "x@y.com"})
    assert resp.status_code == 400


def test_login_requires_identifier(client):
    resp = client.post("/api/v1/auth/login", json={"password": "x"})
    assert resp.status_code == 400


def test_otp_verify_requires_token(client):
    resp = client.post("/api/v1/auth/otp/verify", json={"phone": "+966500000000"})
    assert resp.status_code == 400


def test_otp_resend_requires_phone(client):
    resp = client.post("/api/v1/auth/otp/resend", json={})
    assert resp.status_code == 400
