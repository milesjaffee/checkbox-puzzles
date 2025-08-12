'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 5;
  const finalState = (Array(checkCount).fill(true));
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));

  const rules = ['checkall'];
  
    return (
      <PuzzleBody
        puzzleNum={1}
        numBoxes={checkCount}
        checked={checked}
        handleChange={(index: number) => { 
          handleChange({index, setChecked, clickOrder, finalState, setDone, });
        }}
        finalState={finalState}
        done={done}
        rules={rules}
      />
    )
}