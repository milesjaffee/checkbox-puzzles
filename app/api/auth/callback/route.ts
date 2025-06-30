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
import { createSupabaseServerClient } from "@/lib/supabaseServer";
//import { createClient } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  const { origin } = req.nextUrl;
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(`${origin}/en/login?error=missing_code`);
  }

  console.log('Received code:', code);
console.log('Cookies:', req.cookies.getAll());

  const supabase = await createSupabaseServerClient();

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Session exchange failed:", error);
      return NextResponse.redirect(`${origin}/en/login?error=auth_failed`);
    }

    const redirectUrl = req.cookies.get("redirectAfterLogin")?.value || "/";
    const response = NextResponse.redirect(redirectUrl);

    /*const authCookies = data?.session?.access_token 
        ? [
            `sb-access-token=${data.session.access_token}; Path=/; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure; SameSite=None' : ''}`,
            `sb-refresh-token=${data.session.refresh_token}; Path=/; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure; SameSite=None' : ''}`
          ]
        : [];
      
      // Set all cookies
      authCookies.forEach(cookie => {
        response.headers.append('Set-Cookie', cookie);
      });*/
      return response;
    } catch (err) {
      console.error("Unusual Error during OAuth callback:", err);
      return NextResponse.redirect(`${origin}/en/login?error=server_error`);
    }

}