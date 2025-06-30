import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) {
    // Not logged in — return empty list
    return NextResponse.json({ completedPuzzles: [] });
  } else if (userError) {
    console.error("Failed to fetch user:", userError);
    return NextResponse.json({ completedPuzzles: [] });
  }

  const { data, error } = await supabase
    .from("puzzle_progress")
    .select("puzzle_id")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching puzzle progress:", error);
    return NextResponse.json({ completedPuzzles: [] });
  }

  const completedPuzzles = data.map((entry) => entry.puzzle_id - 1);

  return NextResponse.json({ completedPuzzles });
}