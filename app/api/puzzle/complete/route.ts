import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function markPuzzleComplete(userId: string, puzzleId: string) {
  const { error } = await supabase
    .from("puzzle_progress")
    .insert({ user_id: userId, puzzle_id: puzzleId });

  if (error) console.error("Error saving progress:", error);
}