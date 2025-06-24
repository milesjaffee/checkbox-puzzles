// app/[locale]/puzzle/complete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { puzzleId, userId } = await req.json();

  if (!puzzleId || !userId) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  const { data: existing, error: selectError } = await supabase
    .from('puzzle_progress')
    .select('completed_at')
    .eq('puzzle_id', puzzleId)
    .eq('user_id', userId)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {
    return NextResponse.json({ error: selectError.message }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json({ completedAt: existing.completed_at }, { status: 200 });
  }

  const { error: insertError } = await supabase
    .from('puzzle_progress')
    .insert({ puzzle_id: puzzleId, user_id: userId, completed_at: new Date().toISOString() });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ completedAt: new Date().toISOString() }, { status: 200 });
}