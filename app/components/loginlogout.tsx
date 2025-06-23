"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginLogoutButton() {
  const [user, setUser] = useState<null | { email?: string }>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return (
      <button onClick={logout}>
        Logout ({user.email ?? "User"})
      </button>
    );
  }

  return <button onClick={login}>Login with Google</button>;
}