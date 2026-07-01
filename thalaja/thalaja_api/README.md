# Thalaja API — `backend` branch

Flask backend using a **layered + facade** architecture (mirrors the HBnB
reference project), with **flask-restx** for routing + auto **Swagger**,
**SQLAlchemy** to a **Supabase Postgres** DB, **Supabase Auth** for identity
and sessions/JWT, and **Authentica** (https://authentica.sa) for the **OTP**
send/verify in US-36.

The Flutter app talks **only** to this API. This API is the single gateway
to Supabase and Authentica — the front never reaches the DB or either
provider directly.

> **Who owns what**
> - **Supabase Auth** → the user identity (sign-up) + the session/JWT (login).
> - **Authentica** → sending and verifying the OTP code (SMS / WhatsApp / email).
> - They are independent: verifying an OTP does **not** create a session. After
>   verify, the backend just flips `phone_verified`; the app logs in to get a JWT.

**This slice = the first three user stories, all auth:**

| Story  | Endpoint                       | Method | Provider |
|--------|--------------------------------|--------|----------|
| US-01  | `/api/v1/auth/register`        | POST   | Supabase (identity) + Authentica (OTP) |
| US-02  | `/api/v1/auth/login`           | POST   | Supabase (session/JWT) |
| US-36  | `/api/v1/auth/otp/verify`      | POST   | Authentica → flips `phone_verified` |
| US-36  | `/api/v1/auth/otp/resend`      | POST   | Authentica (channel fallback) |
| (demo) | `/api/v1/auth/me` (JWT-guarded)| GET    | verifies Supabase JWT |

Swagger UI: **`http://localhost:5000/api/v1/docs`**

---

## Structure

```
thalaja_api/
├── README.md                            # backend guide: endpoints, Swagger, .env, providers, run steps
├── run.py                               # ✅ entrypoint: creates app, serves on :5000
├── requirements.txt                     # Python deps: flask, flask-restx, SQLAlchemy, PyJWT, requests…
├── .env.example                         # template for secrets (copy → .env, then fill in)
├── app/                                 # application package
│   ├── __init__.py                       # ✅ app factory: init extensions, mount flask-restx Api + Swagger
│   ├── config.py                         # ✅ config: DB URL, Supabase keys, JWT secret, Authentica key, OTP order
│   ├── extensions.py                     # ✅ shared singletons: db (SQLAlchemy), cors
│   │
│   ├── api/                              # HTTP layer (controllers)
│   │   └── v1/
│   │       ├── __init__.py               # marks the package
│   │       ├── security.py               # ✅ @jwt_required: verifies Supabase-issued JWT
│   │       ├── auth.py                   # ✅ US-01/02/36 endpoints + flask-restx Swagger models
│   │       ├── groups.py                 # ⬜ placeholder namespace (no endpoints yet)
│   │       ├── lists.py                   # ⬜ placeholder namespace
│   │       ├── items.py                   # ⬜ placeholder namespace
│   │       ├── categories.py              # ⬜ placeholder namespace
│   │       └── histories.py               # ⬜ placeholder namespace
│   │
│   ├── models/                          # SQLAlchemy ORM models (one per ERD entity)
│   │   ├── __init__.py                    # ✅ model registry (imports User; others commented until built)
│   │   ├── base_model.py                  # ✅ shared UUID PK helper + created/updated TimestampMixin
│   │   ├── user.py                         # ✅ USER profile mirror (id == auth uid) + phone_verified flag
│   │   ├── user_device.py                  # ⬜ ERD stub (push tokens)
│   │   ├── group.py                         # ⬜ ERD stub (GROUP: individual|household, invite_code)
│   │   ├── group_member.py                  # ⬜ ERD stub (user↔group join + role)
│   │   ├── category.py                       # ⬜ ERD stub (16 system categories enum)
│   │   ├── item.py                            # ⬜ ERD stub (canonical catalog entry)
│   │   ├── shopping_list.py                    # ⬜ ERD stub (SHOPPING_LIST)
│   │   ├── list_item.py                         # ⬜ ERD stub (one item added to a list)
│   │   ├── history.py                            # ⬜ ERD stub (LIST_ACTION — activity log + undo)
│   │   ├── trip.py                                # ⬜ ERD stub (locks a list for a shopping session)
│   │   ├── recipe.py                               # ⬜ ERD stub (RECIPE)
│   │   ├── recipe_ingredient.py                     # ⬜ ERD stub (recipe↔item junction)
│   │   └── instruction.py                            # ⬜ ERD stub (ordered recipe step)
│   │
│   ├── services/                        # business / orchestration layer
│   │   ├── __init__.py                    # marks the package
│   │   ├── facade.py                       # ✅ ThalajaFacade — the ONLY thing the API layer calls
│   │   └── providers/                      # external-service adapters (behind the facade)
│   │       ├── __init__.py                 # marks the package
│   │       ├── supabase_provider.py        # ✅ Supabase Auth (GoTrue): signup (identity) + password login (session)
│   │       └── authentica_provider.py      # ✅ Authentica OTP: send-otp / verify-otp (WhatsApp + email fallback via Authentica)
│   │
│   └── persistence/                     # data-access layer (DB only — no business logic)
│       ├── __init__.py                    # marks the package
│       └── repositories/                  # one repository per aggregate
│           ├── __init__.py                # ✅ repo registry (UserRepository active)
│           ├── user_repository.py         # ✅ profile CRUD + mark_phone_verified()
│           ├── group_repository.py        # ⬜ stub
│           ├── list_repository.py          # ⬜ stub
│           ├── item_repository.py          # ⬜ stub
│           └── history_repository.py       # ⬜ stub
│
├── migrations/                          # Alembic database migrations
│   └── README.md                        # how to init Alembic & autogenerate the users table
└── tests/                                # backend tests
    ├── __init__.py                       # marks the package
    └── test_auth.py                       # ✅ validation smoke tests (run without live providers)
```

### Request flow (layered + facade)

```
auth.py (Resource)  ──▶  ThalajaFacade  ──┬─▶ SupabaseProvider   ─▶ Supabase Auth (identity + session/JWT)
   validates payload      orchestrates    ├─▶ AuthenticaProvider ─▶ Authentica  (OTP send + verify)
   maps errors→HTTP                        └─▶ UserRepository      ─▶ Postgres (public.users, phone_verified)
```

The API layer never calls providers or repositories directly — only the
facade does. This matches the HBnB structure.

---

## How each story works

- **US-01 `register`** → facade calls Supabase `signup` (creates the identity
  + stores name in metadata), mirrors a row into `public.users`, then asks
  **Authentica** to send the OTP using the fallback order, returning which
  channel delivered.
- **US-02 `login`** → `identifier` containing `@` is treated as email, else
  phone; facade calls Supabase password grant and returns the session
  (access/refresh tokens / JWT).
- **US-36 `otp/verify`** → facade calls **Authentica** `verify-otp`. On
  success it flips `phone_verified` on the profile and returns
  `{verified:true}` — **not** a session. The app then logs in (US-02) to get
  its JWT. `otp/resend` re-runs the Authentica channel fallback.

---

## Setup & run

```bash
cd thalaja_api
python -m venv venv && source venv/bin/activate    # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
cp .env.example .env        # then fill in the values below
python run.py               # → http://localhost:5000/api/v1/docs
```

### `.env` values

| Var                    | Where to find it                                                        |
|------------------------|-------------------------------------------------------------------------|
| `DATABASE_URL`         | Supabase → Settings → Database → Connection string → **URI (pooler, 6543)**, prefixed with `postgresql+psycopg2://` |
| `SUPABASE_URL`         | Supabase → Settings → API → Project URL                                 |
| `SUPABASE_ANON_KEY`    | Supabase → Settings → API → anon public key                             |
| `SUPABASE_SERVICE_KEY` | Supabase → Settings → API → service_role key (**server-side only**)     |
| `SUPABASE_JWT_SECRET`  | Supabase → Settings → API → JWT Settings → JWT Secret                   |
| `AUTHENTICA_BASE_URL`  | `https://api.authentica.sa`                                             |
| `AUTHENTICA_API_KEY`   | Authentica dashboard (bcrypt-style, contains `$` — see note below)      |
| `AUTHENTICA_OTP_METHOD`| `whatsapp` (primary channel; Authentica falls back to email)            |
| `AUTHENTICA_TEMPLATE_ID`| `11` (approved WhatsApp template id)                                   |
| `AUTHENTICA_FALLBACK_EMAIL`| `zaytona.team@gmail.com` (Authentica's email fallback target)       |

### Database

Run `../supabase/schema.sql` in the Supabase SQL editor. It creates the
`public.users` profile mirror (including `phone_verified`) and a trigger that
auto-creates a profile when a new auth user signs up. Prefer Alembic going
forward — see `migrations/README.md`.

### Authentica (US-36 OTP)

Authentica owns the OTP lifecycle. The provider calls:

- `POST {AUTHENTICA_BASE_URL}/api/v2/send-otp` — header `X-Authorization: <key>`,
  body `{"method": "whatsapp", "phone": "+9665...", "template_id": 11, "fallback_email": "zaytona.team@gmail.com"}`.
  Authentica sends over **WhatsApp** and **falls back to email itself** using
  `fallback_email` — the backend does not loop channels.
- `POST {AUTHENTICA_BASE_URL}/api/v2/verify-otp` — body `{"phone": "+9665...", "otp": "123456"}` → `{"verified": true}`.

Phone numbers must be E.164 (e.g. `+9665XXXXXXXX`).

> **API key contains `$`.** The Authentica key is a bcrypt-style string like
> `$2y$10$...`. `run.py` loads `.env` with `interpolate=False` so the `$`
> characters are preserved. If you ever `export` it in a shell, wrap it in
> **single quotes** (`export AUTHENTICA_API_KEY='$2y$10$...'`) or the shell
> will eat the `$` sequences. Also: **rotate this key** if it has been shared
> anywhere, and keep `.env` out of git (already in `.gitignore`).

### Watch it work (project goal)

With the server running (`python run.py`), every Authentica call is logged to
the terminal (`→ Authentica POST …` / `← Authentica … status=…`). Test with:

```bash
# 1) Register → creates Supabase user + profile row, sends OTP via Authentica
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Sara","last_name":"Ali","email":"sara@example.com","phone":"+9665XXXXXXXX","password":"StrongPass1"}'

# 2) Verify the OTP the phone received → flips phone_verified in the DB
curl -X POST http://localhost:5000/api/v1/auth/otp/verify \
  -H "Content-Type: application/json" \
  -d '{"phone":"+9665XXXXXXXX","token":"123456"}'

# 3) Resend if needed
curl -X POST http://localhost:5000/api/v1/auth/otp/resend \
  -H "Content-Type: application/json" \
  -d '{"phone":"+9665XXXXXXXX"}'

# 4) Login (email or phone) → returns the Supabase session/JWT
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"sara@example.com","password":"StrongPass1"}'
```

After step 1 you'll see a new row in `public.users`; after step 2,
`phone_verified` becomes `true` for that row.

### Test

```bash
pytest
```

---

## Dependencies (`requirements.txt`)

`Flask`, `flask-restx` (routing + Swagger), `Flask-SQLAlchemy`, `Flask-Cors`,
`SQLAlchemy`, `psycopg2-binary` (Postgres), `PyJWT` (verify Supabase JWT),
`requests` (call Supabase GoTrue + Authentica), `python-dotenv`, `alembic`,
`gunicorn`.
