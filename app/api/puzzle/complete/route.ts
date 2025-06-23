import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { slug } = await req.json();

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/puzzle_progress`, {
    method: 'POST',
    headers: {
      'apikey': process.env.SUPABASE_ANON_KEY!,
      'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify({
      puzzle_slug: slug,
      user_id: session.user.email,
    }),
  });

  if (!res.ok) return new Response('Error saving progress', { status: 500 });

  return new Response('Saved');
}