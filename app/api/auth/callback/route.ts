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
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.href;
  const { origin } = req.nextUrl;

  const { error } = await supabase.auth.exchangeCodeForSession(url);

  if (error) {
    console.error("Session exchange failed:", error);
    return NextResponse.redirect(`${origin}/en/login?error=auth_failed`);
  }

  const redirectUrl = req.cookies.get("redirectAfterLogin")?.value || "/";
  const response = NextResponse.redirect(redirectUrl);

  return response;
}