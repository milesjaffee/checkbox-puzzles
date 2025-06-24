"use client";
import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
      if (error) console.error("Session exchange failed:", error);
      redirect("/");
    };
    handleAuth();
  }, [router]);

  redirect("/");
  return (
<div><p>Logging in...</p></div>
  );

}