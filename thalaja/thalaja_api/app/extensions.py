"""Shared extension singletons, initialised in the app factory.

Kept separate from __init__.py to avoid circular imports between
models / services and the application object.
"""
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# SQLAlchemy ORM handle. Models import `db` from here.
db = SQLAlchemy()

# CORS so the Flutter web build (and tooling) can call the API.
cors = CORS()
