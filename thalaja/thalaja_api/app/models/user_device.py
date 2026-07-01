"""USER_DEVICE model (ERD stub).

Not used by US-01/02/36. Defined here so the schema mirrors the ERD.
Push-token registration belongs to a later notifications story.
"""
# from app.extensions import db
# from app.models.base_model import TimestampMixin, UUIDType
#
# class UserDevice(db.Model):
#     __tablename__ = "user_devices"
#     device_id  = db.Column(UUIDType, primary_key=True)
#     user_id    = db.Column(UUIDType, db.ForeignKey("users.user_id"), nullable=False)
#     fcm_token  = db.Column(db.String(512))
#     platform   = db.Column(db.Enum("ios", "android", "web", name="device_platform"))
#     updated_at = db.Column(db.DateTime(timezone=True))
