import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  const supabase = createSupabaseServerClient();
  const { data: { session } } = await (await supabase).auth.getSession();

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { puzzleId } = await req.json();
  const userId = session.user.id;

  // First check if completion already exists
  const { data: existing, error: fetchError } = await (await supabase)
    .from('puzzle_progress')
    .select('completed_at')
    .eq('user_id', userId)
    .eq('puzzle_id', puzzleId)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') {
    // Only ignore "no rows found" error
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }

  if (existing) {
    // Already completed — return existing timestamp
    return NextResponse.json({ alreadyCompleted: true, completedAt: existing.completed_at });
  }

  // Otherwise insert new record
  const { data: inserted, error: insertError } = await (await supabase)
    .from('puzzle_progress')
    .insert({
      user_id: userId,
      puzzle_id: puzzleId,
    })
    .select('completed_at')
    .single();

  if (insertError) {
    return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
  }

  return NextResponse.json({ alreadyCompleted: false, completedAt: inserted.completed_at });
}