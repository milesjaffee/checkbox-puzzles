import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function OAuthCallback() {
  await supabase.auth.getSession(); // Optional, ensures session is set

  redirect("/"); // Or redirect to a profile, dashboard, etc.
}