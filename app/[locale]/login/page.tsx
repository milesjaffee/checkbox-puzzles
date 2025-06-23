"use client";

import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

export default function LoginPage() {
  const { locale } = useParams();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/${locale}/auth/callback`,
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}