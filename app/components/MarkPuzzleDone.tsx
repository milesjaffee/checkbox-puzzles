// components/MarkPuzzleDone.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import LoginLogoutButton from './loginlogout';

type Props = {
  puzzleId: string;
};

export default function MarkPuzzleDone({ puzzleId }: Props) {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {

    const markDone = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoggedOut(true);
        return;
      }

      const res = await fetch('/en/api/puzzle/complete', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ puzzleId }),
      });

      const result = await res.json();
      setTimestamp(result.completedAt || new Date().toISOString());
    };

    markDone();
  }, [puzzleId]);

  if (loggedOut) {
    return <p>Log in to track progress: [<LoginLogoutButton/>]</p>;
  }
  if (!timestamp) return <p>Marking puzzle as done...</p>;
  return <p>Puzzle marked as done: {timestamp}</p>;
}