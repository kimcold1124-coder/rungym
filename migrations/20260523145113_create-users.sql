-- Public users (profile) table linked 1:1 with auth.users.
-- App code is expected to upsert into this table right after a successful
-- sign-in (the auth.users trigger approach is blocked: the auth schema is
-- InsForge-managed and write operations on it are rejected).

CREATE TABLE IF NOT EXISTS public.users (
  id          UUID PRIMARY KEY,
  email       TEXT NOT NULL,
  name        TEXT,
  avatar_url  TEXT,
  provider    TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS users_email_idx ON public.users (email);

-- Keep updated_at in sync on every UPDATE.
CREATE OR REPLACE FUNCTION public.set_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_set_updated_at ON public.users;
CREATE TRIGGER users_set_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.set_users_updated_at();

-- Row-Level Security: any signed-in user can read profiles,
-- but each user can only insert/update their own row.
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_all"
  ON public.users FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "users_insert_own"
  ON public.users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "users_update_own"
  ON public.users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
