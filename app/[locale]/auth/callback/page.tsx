import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default async function AuthCallback({
  params,
}: { params: { locale: string } }) {
  await supabase.auth.getSession();

  redirect(`/${params.locale}`);
}