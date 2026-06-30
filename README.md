# Thalaja — `dev` branch

`dev` is the **integration branch**. It holds the full project and is the
parent of two work branches:

- **`frontend`** → owns `thalaja_mobile/` (Flutter, Clean Architecture)
- **`backend`**  → owns `thalaja_api/` + `supabase/` (Flask, layered + facade)

Work happens on `frontend` / `backend`, then merges back into `dev`.

> **Scope of this slice:** only the first three user stories, all auth:
> **US-01** register · **US-02** login (email *or* phone) · **US-36** OTP
> verification with channel fallback (SMS → WhatsApp(mock) → email).
> Everything else in the ERD exists as labeled placeholders.

Legend: ✅ = built for US-01/02/36 · ⬜ = placeholder for a later story.

---

## Full repository structure (every dir & file commented)

```
.
├── README.md                                  # THIS FILE — dev branch overview: full tree, branch flow, front↔back wiring
├── .gitignore                                 # ignores venv, .env, .dart_tool, build/, caches, IDE/OS junk
│
├── thalaja_mobile/                            # ── FRONTEND branch ── Flutter client (Clean Architecture)
│   ├── README.md                              # frontend guide: structure, layer rules, setup & run
│   ├── pubspec.yaml                           # Flutter deps: flutter_bloc, dio, dartz, get_it, equatable
│   ├── lib/                                   # all Dart source lives here
│   │   ├── main.dart                          # app entrypoint: init get_it DI, then runApp(ThalajaApp)
│   │   ├── app.dart                           # ThalajaApp: MaterialApp, applies AppTheme, home = LoginPage
│   │   ├── injection_container.dart           # ✅ get_it wiring: datasource → repo → usecases → cubits
│   │   │
│   │   ├── core/                              # cross-feature building blocks (shared by every feature)
│   │   │   ├── constants/                     # app-wide constant values
│   │   │   │   └── api_constants.dart          # ✅ Flask base URL (10.0.2.2 etc.) + /auth/* endpoint paths
│   │   │   ├── errors/                         # error types kept separate per architecture layer
│   │   │   │   ├── exceptions.dart             # ✅ data-layer throwables: ServerException, NetworkException
│   │   │   │   └── failure.dart                # ✅ domain-layer failures: Server/Network/Validation Failure
│   │   │   ├── network/                        # HTTP plumbing (front talks only to Flask)
│   │   │   │   ├── api_client.dart             # ✅ Dio instance: baseUrl, timeouts, attaches interceptors
│   │   │   │   └── auth_interceptor.dart       # ✅ adds "Authorization: Bearer <jwt>"; holds in-memory TokenStore
│   │   │   ├── theme/                          # global look & feel
│   │   │   │   ├── app_colors.dart             # ⚠ PALETTE — replace placeholder Figma hexes here (single source)
│   │   │   │   └── app_theme.dart              # ✅ ThemeData (inputs, buttons, colors) built from AppColors
│   │   │   └── utils/                          # small shared helpers
│   │   │       └── validators.dart            # ✅ form validators: email, phone, password, login identifier
│   │   │
│   │   └── features/                           # one folder per feature; each = data + domain + presentation
│   │       ├── auth/                           # ✅ BUILT — US-01 register, US-02 login, US-36 OTP
│   │       │   ├── data/                       # outer layer: talks to the network, maps JSON
│   │       │   │   ├── datasources/            # raw remote calls
│   │       │   │   │   └── auth_remote_datasource.dart   # ✅ Dio POSTs to Flask /auth/* ; throws exceptions
│   │       │   │   ├── models/                 # JSON ↔ entity mappers (extend domain entities)
│   │       │   │   │   ├── auth_session_model.dart        # ✅ parses Supabase session (access/refresh tokens)
│   │       │   │   │   └── registration_result_model.dart # ✅ parses /register response (channel, ids)
│   │       │   │   └── repositories/           # implements the domain contract
│   │       │   │       └── auth_repository_impl.dart      # ✅ calls datasource, maps exceptions → Failures, saves tokens
│   │       │   ├── domain/                     # pure Dart core: NO Flutter, NO Dio, NO JSON
│   │       │   │   ├── entities/               # business objects
│   │       │   │   │   ├── auth_session.dart    # ✅ AuthSession + AuthUserRef (tokens + minimal user)
│   │       │   │   │   ├── auth_user.dart        # ✅ AuthUser profile entity
│   │       │   │   │   └── registration_result.dart      # ✅ result of US-01 (which channel got the OTP)
│   │       │   │   ├── repositories/           # abstract contracts the data layer must satisfy
│   │       │   │   │   └── auth_repository.dart  # ✅ AuthRepository interface (register/login/verify/resend)
│   │       │   │   └── usecases/               # one class per user action (single responsibility)
│   │       │   │       ├── register_user.dart   # ✅ US-01
│   │       │   │       ├── login_user.dart      # ✅ US-02
│   │       │   │       ├── verify_otp.dart       # ✅ US-36 (verify the code)
│   │       │   │       └── resend_otp.dart       # ✅ US-36 (resend, re-runs channel fallback)
│   │       │   └── presentation/               # UI layer: Cubits + screens + widgets
│   │       │       ├── bloc/                    # Cubit state management (one cubit + state per screen)
│   │       │       │   ├── register_cubit.dart  # ✅ drives RegisterPage
│   │       │       │   ├── register_state.dart   # ✅ Initial/Loading/Success/Error
│   │       │       │   ├── login_cubit.dart      # ✅ drives LoginPage
│   │       │       │   ├── login_state.dart      # ✅ Initial/Loading/Success/Error
│   │       │       │   ├── otp_cubit.dart         # ✅ drives OtpPage (verify + resend)
│   │       │       │   └── otp_state.dart          # ✅ Initial/Verifying/Resending/Resent/Verified/Error
│   │       │       ├── pages/                   # full screens
│   │       │       │   ├── register_page.dart   # ✅ US-01 form → on success navigates to OtpPage
│   │       │       │   ├── login_page.dart       # ✅ US-02 form (email or phone) → links to RegisterPage
│   │       │       │   └── otp_page.dart          # ✅ US-36 code entry, shows channel, resend button
│   │       │       └── widgets/                 # small reusable UI pieces (stateless)
│   │       │           ├── app_text_field.dart  # ✅ themed TextFormField wrapper
│   │       │           └── primary_button.dart   # ✅ full-width button with built-in loading spinner
│   │       │
│   │       ├── groups/                          # ⬜ later story (GROUP / GROUP_MEMBER)
│   │       │   └── README.md                    # ⬜ explains it follows the same data/domain/presentation layout
│   │       ├── lists/                           # ⬜ later story (SHOPPING_LIST / LIST_ITEM)
│   │       │   └── README.md                    # ⬜ placeholder doc
│   │       ├── items/                           # ⬜ later story (ITEM catalog)
│   │       │   └── README.md                    # ⬜ placeholder doc
│   │       ├── categories/                      # ⬜ later story (CATEGORY)
│   │       │   └── README.md                    # ⬜ placeholder doc
│   │       ├── recipes/                         # ⬜ later story (RECIPE / RECIPE_INGREDIENT / INSTRUCTION)
│   │       │   └── README.md                    # ⬜ placeholder doc
│   │       └── history/                         # ⬜ later story (LIST_ACTION / history feed)
│   │           └── README.md                    # ⬜ placeholder doc
│   │
│   └── test/                                    # Flutter tests
│       └── register_cubit_test.dart            # ✅ unit test for RegisterCubit (mocktail + bloc_test)
│
├── thalaja_api/                                # ── BACKEND branch ── Flask API (layered + facade, HBnB-style)
│   ├── README.md                               # backend guide: endpoints, Swagger, .env, Supabase, run steps
│   ├── run.py                                  # ✅ entrypoint: creates app, serves on :5000
│   ├── requirements.txt                        # Python deps: flask, flask-restx, SQLAlchemy, PyJWT, requests…
│   ├── .env.example                            # template for secrets (copy → .env, then fill in)
│   ├── app/                                     # application package
│   │   ├── __init__.py                          # ✅ app factory: init extensions, mount flask-restx Api + Swagger
│   │   ├── config.py                            # ✅ config: DATABASE_URL, Supabase keys, JWT secret, OTP order
│   │   ├── extensions.py                        # ✅ shared singletons: db (SQLAlchemy), cors
│   │   │
│   │   ├── api/                                 # HTTP layer (controllers)
│   │   │   └── v1/                              # version 1 of the API
│   │   │       ├── __init__.py                  # marks the package
│   │   │       ├── security.py                  # ✅ @jwt_required decorator: verifies Supabase-issued JWT
│   │   │       ├── auth.py                       # ✅ US-01/02/36 endpoints + flask-restx Swagger models
│   │   │       ├── groups.py                     # ⬜ placeholder namespace (no endpoints yet)
│   │   │       ├── lists.py                       # ⬜ placeholder namespace
│   │   │       ├── items.py                       # ⬜ placeholder namespace
│   │   │       ├── categories.py                  # ⬜ placeholder namespace
│   │   │       └── histories.py                   # ⬜ placeholder namespace
│   │   │
│   │   ├── models/                              # SQLAlchemy ORM models (one per ERD entity)
│   │   │   ├── __init__.py                       # ✅ model registry (imports User; others commented until built)
│   │   │   ├── base_model.py                     # ✅ shared UUID PK helper + created/updated TimestampMixin
│   │   │   ├── user.py                            # ✅ USER — public profile mirror (user_id == Supabase auth uid)
│   │   │   ├── user_device.py                     # ⬜ ERD stub (push tokens) — fields in docstring
│   │   │   ├── group.py                            # ⬜ ERD stub (GROUP: individual|household, invite_code)
│   │   │   ├── group_member.py                     # ⬜ ERD stub (user↔group join + role)
│   │   │   ├── category.py                          # ⬜ ERD stub (16 system categories enum)
│   │   │   ├── item.py                               # ⬜ ERD stub (canonical catalog entry)
│   │   │   ├── shopping_list.py                       # ⬜ ERD stub (SHOPPING_LIST)
│   │   │   ├── list_item.py                            # ⬜ ERD stub (one item added to a list)
│   │   │   ├── history.py                               # ⬜ ERD stub (LIST_ACTION — activity log + undo)
│   │   │   ├── trip.py                                   # ⬜ ERD stub (locks a list for a shopping session)
│   │   │   ├── recipe.py                                  # ⬜ ERD stub (RECIPE)
│   │   │   ├── recipe_ingredient.py                        # ⬜ ERD stub (recipe↔item junction)
│   │   │   └── instruction.py                               # ⬜ ERD stub (ordered recipe step)
│   │   │
│   │   ├── services/                            # business / orchestration layer
│   │   │   ├── __init__.py                       # marks the package
│   │   │   ├── facade.py                          # ✅ ThalajaFacade — the ONLY thing the API layer calls
│   │   │   └── providers/                         # external-service adapters (behind the facade)
│   │   │       ├── __init__.py                    # marks the package
│   │   │       ├── supabase_provider.py           # ✅ calls Supabase Auth (GoTrue): signup/token/otp/verify
│   │   │       └── channels.py                     # ✅ US-36 fallback: SMS(real) → WhatsApp(mock) → Email(real)
│   │   │
│   │   └── persistence/                         # data-access layer (DB only — no business logic)
│   │       ├── __init__.py                       # marks the package
│   │       └── repositories/                     # one repository per aggregate
│   │           ├── __init__.py                   # ✅ repo registry (UserRepository active)
│   │           ├── user_repository.py            # ✅ profile CRUD via SQLAlchemy (create/get/update)
│   │           ├── group_repository.py           # ⬜ stub
│   │           ├── list_repository.py             # ⬜ stub
│   │           ├── item_repository.py             # ⬜ stub
│   │           └── history_repository.py          # ⬜ stub
│   │
│   ├── migrations/                              # Alembic database migrations
│   │   └── README.md                            # how to init Alembic & autogenerate the users table
│   └── tests/                                    # backend tests
│       ├── __init__.py                          # marks the package
│       └── test_auth.py                          # ✅ validation smoke tests (run without live Supabase)
│
└── supabase/                                    # ── BACKEND branch ── DB scripts (Supabase Postgres)
    ├── schema.sql                                # ✅ public.users profile mirror + trigger auto-creating it on signup
    └── seed.sql                                  # ⬜ placeholder (system categories & sample recipes later)
```

---

## How the two halves connect

The Flutter app **never** touches Supabase or the database directly. It calls
the Flask API, and Flask is the single gateway to Supabase Auth and the DB.

```
Flutter (thalaja_mobile)                 Flask (thalaja_api)              Supabase
─────────────────────────                ───────────────────             ────────
RegisterPage / LoginPage / OtpPage
        │  (Cubit → UseCase → Repository)
        ▼
   Dio  (api_client.dart)  ──HTTP──▶  /api/v1/auth/*  ──▶  ThalajaFacade
   Authorization: Bearer <jwt>                                │
                                                              ├─▶ SupabaseProvider ─▶ Supabase Auth (GoTrue)
                                                              ├─▶ channels.py      ─▶ SMS / WhatsApp(mock) / Email
                                                              └─▶ UserRepository   ─▶ Postgres (public.users)
```

- **US-01** register → `auth.py` → facade → Supabase `signup` → mirror profile row → dispatch OTP (fallback) → return channel
- **US-02** login → `auth.py` → facade → Supabase password grant → return session tokens
- **US-36** verify/resend → `auth.py` → facade → Supabase verify / re-run channel fallback

---

## Branch & push flow

```bash
# in the project root, with all files in place → this becomes `dev`
git init
git remote add origin https://github.com/MIS-hero/Thalaja-team.git
git add .
git commit -m "scaffold dev: auth slice (US-01/02/36) + ERD placeholders"
git branch -M dev
git push -u origin dev

# create the two work branches FROM dev
git checkout -b frontend dev
git push -u origin frontend

git checkout -b backend dev
git push -u origin backend
```

Day-to-day: commit Flutter work on `frontend`, backend work on `backend`,
then open PRs back into `dev`.

---

## Run order (local)

1. **Backend** — see `thalaja_api/README.md` (fill `.env`, `pip install -r requirements.txt`, `python run.py`).
2. **Supabase** — run `supabase/schema.sql` in the SQL editor; configure an SMS provider in Auth settings for real US-36 SMS.
3. **Frontend** — see `thalaja_mobile/README.md` (`flutter pub get`, set the base URL, `flutter run`).

---

## After pushing — two flagged TODOs

- **Colors** — `thalaja_mobile/lib/core/theme/app_colors.dart` uses placeholder hexes, each tagged `// TODO(figma)`. Replace them with the real values from the Figma file (node 231-72) — one place restyles the whole app.
- **WhatsApp** — real SMS + email OTP run through Supabase Auth; WhatsApp is a **mock** that logs the code. `thalaja_api/app/services/providers/channels.py` → `WhatsAppChannel.send()` shows where to wire the real WhatsApp Cloud API.
