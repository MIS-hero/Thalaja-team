"""USER model — the public profile mirror of a Supabase auth user.

Authentication (passwords, OTP, sessions) is owned by Supabase Auth
in the `auth.users` schema. This table lives in the public schema and
holds the app-facing profile. The primary key `user_id` is exactly the
Supabase auth UID, so the two stay in lock-step.

Scope note: only USER is fleshed out for US-01/02/36. The remaining
ERD tables are defined as thin stubs in their own modules so migrations
and relationships can be layered in later without restructuring.
"""
from app.extensions import db
from app.models.base_model import TimestampMixin, UUIDType


class User(db.Model, TimestampMixin):
    __tablename__ = "users"

    # NOT auto-generated: this equals the Supabase auth user id.
    user_id = db.Column(UUIDType, primary_key=True)

    first_name = db.Column(db.String(80), nullable=True)
    last_name = db.Column(db.String(80), nullable=True)
    email = db.Column(db.String(255), unique=True, nullable=True, index=True)
    phone = db.Column(db.String(32), unique=True, nullable=True, index=True)
    avatar_url = db.Column(db.String(512), nullable=True)

    # US-36: set true once Authentica verifies the phone OTP.
    phone_verified = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self) -> dict:
        return {
            "user_id": self.user_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "phone": self.phone,
            "avatar_url": self.avatar_url,
            "phone_verified": self.phone_verified,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }
