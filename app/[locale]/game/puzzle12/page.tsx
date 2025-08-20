'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 9;
  const checkCount = 6;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

  const rules = [
    'limit', 'limit-reset', 'delay'
  ];

  const delay = 1;
  const [clickQueue, setClickQueue] = useState<number[]>([]);
  
    return (
      <PuzzleBody
        puzzleNum={12}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}

        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, setDone, 
          clicks, maxClicks, setClicks, clickQueue, setClickQueue, delay})}
        reset={() => reset({setChecked, setClicks, checkCount, setClickQueue})}

        done={done}
        rules={rules}

        delay={delay}
      />

    )
}