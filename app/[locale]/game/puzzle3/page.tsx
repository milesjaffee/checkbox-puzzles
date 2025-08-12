'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 10;
  const checkCount = 6;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

  const rules = [
    'limit', 'limit-reset',
  ];
  
    return (
      <PuzzleBody
        puzzleNum={3}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}
        
        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, finalState, setDone, 
          clicks, maxClicks, setClicks})}
        reset={() => reset({setChecked, setClicks, checkCount})}

        finalState={finalState}
        done={done}
        rules={rules}
      />

    )
}