// components/MarkPuzzleDone.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Props = {
  puzzleId: string;
};

export default function MarkPuzzleDone({ puzzleId }: Props) {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {

    const markDone = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return console.error('User not logged in (from done component)');

      const res = await fetch('/en/api/puzzle/complete', {
        method: 'POST',
        credentials: 'include',
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