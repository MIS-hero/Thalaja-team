# Alembic migrations

This folder holds database migrations. Initialise once with:

```bash
alembic init migrations          # if not already initialised
# point sqlalchemy.url at DATABASE_URL inside alembic.ini / env.py
alembic revision --autogenerate -m "create users profile table"
alembic upgrade head
```

For US-01/02/36 only the `users` profile-mirror table is required.
Supabase already owns the `auth.users` table.
