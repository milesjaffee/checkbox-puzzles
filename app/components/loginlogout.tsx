"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginLogoutButton() {
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
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/${currentLocale}/api/auth/callback`,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return user ? (
    <button onClick={logout}>
      Logout ({user.email ?? "User"})
    </button>
  ) : (
    <button onClick={login}>Login with Google</button>
  );
}