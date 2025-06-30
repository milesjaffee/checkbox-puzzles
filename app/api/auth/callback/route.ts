/*"use client";
import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
      if (error) console.error("Session exchange failed:", error);
      
      const redirectUrl = localStorage.getItem("redirectAfterLogin") || "/";
      console.log("Redirecting to ", redirectUrl);
      localStorage.removeItem("redirectAfterLogin");
      redirect(redirectUrl);
    };
    handleAuth();
  }, [router]);

  return (
<div><p>Logging in...</p></div>
  );

}*/
'use server';
import { NextRequest, NextResponse } from "next/server";
//import { supabase } from "@/lib/supabaseClient";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.href;
  const { origin } = req.nextUrl;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.auth.exchangeCodeForSession(url);

  if (error) {
    console.error("Session exchange failed:", error);
    return NextResponse.redirect(`${origin}/en/login?error=auth_failed`);
  }

  const redirectUrl = req.cookies.get("redirectAfterLogin")?.value || "/";
  const response = NextResponse.redirect(redirectUrl);

  return response;
}