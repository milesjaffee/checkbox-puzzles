// app/[locale]/puzzle/complete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const { puzzleId } = await req.json();

  // Check for existing completion
  const { data: existing, error: selectError } = await supabase
    .from('puzzle_progress')
    .select('completed_at')
    .eq('user_id', user.id)
    .eq('puzzle_id', puzzleId)
    .maybeSingle();

  if (selectError && selectError.code !== 'PGRST116') {  // 'PGRST116' means no row found
    console.error('Select error:', selectError);
    return NextResponse.json({ error: selectError.message }, { status: 500 });
  }

  if (existing) {
    // Already completed, return timestamp
    return NextResponse.json({ completedAt: existing.completed_at});
  }

  // Insert new completion
  const { error } = await supabase
    .from('puzzle_progress')
    .insert({
      user_id: user.id,
      puzzle_id: puzzleId,
    });

  if (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ completedAt: new Date().toISOString() });
}