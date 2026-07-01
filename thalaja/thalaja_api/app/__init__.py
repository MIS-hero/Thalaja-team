"""Application factory.

Builds the Flask app, initialises extensions, mounts the flask-restx
Api (which auto-generates Swagger at /api/v1/docs) and registers the
versioned namespaces.

Only the auth namespace carries real logic for now (US-01/02/36);
the other namespaces are registered as empty placeholders so the API
surface mirrors the full ERD.
"""
from flask import Flask
from flask_restx import Api

from .config import get_config
from .extensions import db, cors


def create_app(config_object=None):
    app = Flask(__name__)
    app.config.from_object(config_object or get_config())

    # ── init extensions ──────────────────────────────────────
    db.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})

    # ── flask-restx Api → Swagger UI at /api/v1/docs ─────────
    authorizations = {
        "Bearer": {
            "type": "apiKey",
            "in": "header",
            "name": "Authorization",
            "description": "Supabase access token. Format: **Bearer &lt;token&gt;**",
        }
    }
    api = Api(
        app,
        version="1.0",
        title="Thalaja API",
        description="Shared grocery & recipe app — backend gateway to Supabase.",
        doc="/api/v1/docs",
        prefix="/api/v1",
        authorizations=authorizations,
        security="Bearer",
    )

    # ── namespaces ───────────────────────────────────────────
    from .api.v1.auth import ns as auth_ns
   

    api.add_namespace(auth_ns, path="/auth")
   
    # Create tables for models that exist (profile mirror, etc.).
    # In real deployments prefer Alembic migrations over create_all.
    with app.app_context():
        db.create_all()

    return app
