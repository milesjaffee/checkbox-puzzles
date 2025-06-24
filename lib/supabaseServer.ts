import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies(); // async cookies() is required in latest Next.js

  console.log('Creating Supabase server client with cookies:', cookieStore.getAll());
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () =>
          cookieStore.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          })),
      },
      auth: {
        persistSession: true, // MUST be true for cookies to store session
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    }
  );
};