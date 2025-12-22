'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export function Puzzle1() {
  const checkCount = 5;
  //final state left as default
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
          handleChange({index, setChecked, clickOrder, setDone, });
        }}
        done={done}
        rules={rules}
      />
    )
}