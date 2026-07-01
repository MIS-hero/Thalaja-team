"""Model registry.

Importing the models here ensures SQLAlchemy is aware of every table
when create_all() / Alembic autogenerate runs.

Only User is active for US-01/02/36; the rest are ERD stubs and are
commented out until their stories are implemented.
"""
from app.models.user import User  # noqa: F401


