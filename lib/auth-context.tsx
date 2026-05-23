"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { insforge } from "@/lib/insforge";

type AuthUser = {
  id: string;
  email?: string | null;
  name?: string | null;
  avatar_url?: string | null;
  [key: string]: unknown;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  signOut: async () => {},
});

async function syncProfile(user: AuthUser) {
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>;
  const appMeta = (user.app_metadata ?? {}) as Record<string, unknown>;

  const name =
    (user.name as string | undefined) ??
    (meta.name as string | undefined) ??
    (meta.full_name as string | undefined) ??
    null;
  const avatar_url =
    (user.avatar_url as string | undefined) ??
    (meta.avatar_url as string | undefined) ??
    (meta.picture as string | undefined) ??
    null;
  const provider = (appMeta.provider as string | undefined) ?? "email";

  const { data: existing } = await insforge.database
    .from("users")
    .select("id")
    .eq("id", user.id)
    .limit(1);

  if (existing && existing.length > 0) {
    await insforge.database
      .from("users")
      .update({ email: user.email ?? "", name, avatar_url, provider })
      .eq("id", user.id);
  } else {
    await insforge.database.from("users").insert([
      {
        id: user.id,
        email: user.email ?? "",
        name,
        avatar_url,
        provider,
      },
    ]);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      const { data, error } = await insforge.auth.getCurrentUser();
      if (cancelled) return;

      if (error || !data?.user) {
        setUser(null);
      } else {
        const u = data.user as AuthUser;
        setUser(u);
        // Fire-and-forget profile sync. Failures are non-fatal.
        void syncProfile(u).catch(() => {});
      }
      setLoading(false);
    }

    void hydrate();
    return () => {
      cancelled = true;
    };
  }, []);

  const signOut = useCallback(async () => {
    await insforge.auth.signOut();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, signOut }),
    [user, loading, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
