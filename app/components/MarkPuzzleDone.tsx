'use client';

import { useEffect, useState } from 'react';

type Props = {
  puzzleId: string; // e.g., 'puzzle1' or a slug
};

export default function MarkPuzzleDone({ puzzleId }: Props) {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const [hasSent, setHasSent] = useState(false);

  useEffect(() => {
    if (!hasSent) {
      const markComplete = async () => {
        try {
          const res = await fetch('/puzzle/complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ puzzleId }),
          });

          if (!res.ok) {
            throw new Error('Failed to mark puzzle as complete');
          }

          setHasSent(true);
          setTimestamp(res.headers.get('completedAt') || new Date().toISOString());
        } catch (err) {
          console.error(err);
        }
      };

      markComplete();
    }
  }, [hasSent, puzzleId]);

  if (!hasSent || !timestamp) return null;

  return (
    <p className="text-sm text-green-600 mt-2">
      Puzzle marked as done at <strong>{timestamp}</strong>
    </p>
  );
}