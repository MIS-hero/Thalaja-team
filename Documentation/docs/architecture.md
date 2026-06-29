# Architecture Reference — Thalaja

## Stack

| Layer | Technology | Constraint |
|---|---|---|
| Mobile | Flutter + BLoC + Clean Architecture | BLoC is the only state management — no Provider, Riverpod, or GetX |
| Backend | Flask REST API | Only backend layer |
| Database | PostgreSQL via Supabase | DB only — no Auth SDK, no Realtime SDK, no direct Flutter client calls |
| Auth | JWT | Issued and validated by Flask exclusively |
| Real-time | Flask-SocketIO | List-level sync only (see below) |
| Push | Firebase Cloud Messaging | Push notifications only |
| Storage | Supabase Storage | Flask service key only — never called from Flutter |
| Analytics | PostHog | |

## Flutter Folder Structure

```
lib/
├── core/
│   ├── network/          # HTTP client, JWT interceptor
│   ├── errors/           # Failure types, exception classes
│   └── utils/
├── features/
│   └── {feature}/
│       ├── presentation/
│       │   ├── pages/
│       │   ├── widgets/
│       │   └── bloc/           # {Feature}Bloc / {Feature}Event / {Feature}State
│       ├── domain/
│       │   ├── entities/
│       │   ├── usecases/
│       │   └── repositories/   # Interfaces only
│       └── data/
│           ├── models/
│           ├── datasources/
│           │   ├── remote/     # REST calls to Flask
│           │   └── realtime/   # WebSocket — list sync only
│           └── repositories/   # Implementations
```

## Flask Folder Structure

```
app/
├── api/v1/
│   ├── auth.py           # /auth/register, /auth/login, /auth/forgot-password
│   ├── groups.py         # /groups
│   ├── lists.py          # /lists
│   ├── items.py          # /lists/{listId}/items
│   ├── categories.py
│   ├── recipes.py
│   ├── reminders.py
│   └── history.py
├── services/
│   ├── auth_service.py
│   ├── group_service.py
│   ├── list_service.py
│   ├── reminder_service.py
│   └── history_service.py
├── models/               # SQLAlchemy ORM models
├── persistence/
│   └── repositories/
├── config.py
└── extensions.py
```

## WebSocket Event Reference

Broadcast to all members currently viewing the affected list.

| Event | Trigger |
|---|---|
| `item_added` | New item written to list |
| `item_updated` | Item field edited |
| `item_removed` | Item deleted from list |
| `item_urgency_changed` | `is_urgent` flag toggled |

**Atomicity rule:** Each broadcast fires in the same database transaction that writes the `HISTORY` record. Not a separate step.

**Buying View exception:** Check/uncheck actions (`is_bought` updates) do NOT broadcast WebSocket events.

## Full API Endpoint Table

See `Documentation/STAGE3-technical-documentation.md` → External API Table and Internal API / Backend Operations Table.
