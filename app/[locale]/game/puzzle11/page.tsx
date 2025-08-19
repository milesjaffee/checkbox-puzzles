'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 7;
  const checkCount = 7;
  const [totalResets, setTotalResets] = useState(7);
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

  const rules = [
    'limit', 'limit-reset', 'num-resets',
  ];
  
    return (
      <PuzzleBody
        puzzleNum={11}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}

        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, setDone, 
                  clicks, maxClicks, setClicks})}
        reset={() => reset({setChecked, setClicks, checkCount, setTotalResets})}

        done={done}
        rules={rules}

        totalResets={totalResets}
      />
    )
}