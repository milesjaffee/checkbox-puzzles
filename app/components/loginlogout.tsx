"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useI18n, useScopedI18n } from "@/locales/client";

export default function LoginLogoutButton() {
  const t = useI18n();
  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(() => {
    // Check for active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription?.unsubscribe?.();
  }, []);

  const login = async () => {
    localStorage.setItem("redirectAfterLogin", window.location.href);
    const currentLocale = window.location.pathname.split("/")[1] || "en";
    let origin = window.location.origin;
    if (!origin.endsWith("/")) {
      origin += "/";
    }

    localStorage.setItem("redirectTo", `${origin}${currentLocale}/api/auth/callback`);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}${currentLocale}/api/auth/callback`,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return user ? (
    <button onClick={logout}>
      {t('auth.logout', {email: user.email ?? "User"})}
    </button>
  ) : (
    <button onClick={login}>{t('auth.login')}</button>
  );
}