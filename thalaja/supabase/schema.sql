-- ════════════════════════════════════════════════════════════
-- Thalaja — reference schema (public profile mirror)
-- ────────────────────────────────────────────────────────────
-- Authentication tables (auth.users, auth.sessions, OTP) are MANAGED
-- BY SUPABASE AUTH and are NOT created here.
--
-- For US-01/02/36 the only app table needed is `public.users`, the
-- profile mirror whose id == auth user id. The rest of the ERD is shown
-- as commented DDL for reference; create it as those stories land
-- (preferably via Alembic).
-- ════════════════════════════════════════════════════════════

-- USER (profile mirror) ---------------------------------------
create table if not exists public.users (
    user_id     uuid primary key references auth.users (id) on delete cascade,
    first_name  varchar(80),
    last_name   varchar(80),
    email       varchar(255) unique,
    phone       varchar(32)  unique,
    avatar_url  varchar(512),
    phone_verified boolean not null default false,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now()
);

-- Auto-create a profile row when a new auth user signs up.
-- (Optional convenience: the Flask facade also mirrors the profile.)
create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.users (user_id, email, phone, first_name, last_name)
    values (
        new.id,
        new.email,
        new.phone,
        new.raw_user_meta_data ->> 'first_name',
        new.raw_user_meta_data ->> 'last_name'
    )
    on conflict (user_id) do nothing;
    return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();

-- ── Remaining ERD tables (create as their stories are built) ──
-- USER_DEVICE, GROUP, GROUP_MEMBER, CATEGORY, ITEM, SHOPPING_LIST,
-- LIST_ITEM, LIST_ACTION, TRIP, RECIPE, RECIPE_INGREDIENT, INSTRUCTION
