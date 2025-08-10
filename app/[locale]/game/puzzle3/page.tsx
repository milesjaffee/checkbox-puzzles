'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { onChange, reset } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 10;
  const checkCount = 6;
  const clickOrder = [4, 1, 3, 6, 5, 2];
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = [
    'limit', 'limit-reset',
  ];

  const handleChange = (index: number) => {
    if (clicks >= maxClicks) return;
    setClicks(c => c + 1);
    onChange({index, setChecked, clickOrder, finalState, setDone});
  };
  
    return (
      <PuzzleBody
        puzzleNum={3}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        //no order here
        checked={checked}
        handleChange={handleChange}
        reset={() => reset({setChecked, setClicks, checkCount})}
        finalState={finalState}
        done={done}
        rules={rules}
      />

    )
}