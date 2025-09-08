'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 10;
  const checkCount = 7;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

  const rules = [
    'checkall', 'hidden', 'limit-reset',
  ];

  const hidden = ['clicks'];
  
    return (
      <PuzzleBody
        puzzleNum={15}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}

        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, setDone, 
          clicks, maxClicks, setClicks})}
        reset={() => reset({setChecked, setClicks, checkCount})}

        done={done}
        rules={rules}
        hidden={hidden}
      />

    )
}