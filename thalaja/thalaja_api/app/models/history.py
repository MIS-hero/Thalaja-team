"""LIST_ACTION model (ERD stub) — activity/history log per list.

Exposed via the /histories namespace. Supports undo windows.
"""
# uuid action_id PK, uuid list_id FK, uuid list_item_id FK, uuid user_id FK,
# enum action, json metadata, timestamp undo_available_until,
# bool is_undone, created_at
