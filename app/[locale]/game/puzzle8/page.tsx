'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 18;
  const checkCount = 8;
  const shuffleAfter = 3;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

    const rules = [
        'limit', 
        'shuffle-checked', 
        'limit-reset', 
    ];
  
    return (
    <PuzzleBody
        puzzleNum={8}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}
        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, setDone, 
          clicks, maxClicks, setClicks, 
          shuffleOrder: checked, setShuffleOrder: setChecked, shuffleAfter})}

        reset={() => reset({setChecked, setClicks, checkCount})}

        done={done}
        rules={rules}

        shuffleAfter={shuffleAfter}

      />

    )
}