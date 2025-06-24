// components/MarkPuzzleDone.tsx
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type Props = {
  puzzleId: string;
};

export default function MarkPuzzleDone({ puzzleId }: Props) {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const markDone = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return console.error('User not logged in');

      const res = await fetch('/en/api/puzzle/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ puzzleId, userId: user.id }),
      });

      const result = await res.json();
      setTimestamp(result.completedAt || new Date().toISOString());
    };

    markDone();
  }, [puzzleId]);

  if (!timestamp) return <p>Marking puzzle as done...</p>;
  return <p>Puzzle marked as done: {timestamp}</p>;
}