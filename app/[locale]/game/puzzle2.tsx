'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Puzzle2() {
  const checkCount = 9;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));

  const rules = ['checkall'];
  
    return (
      <PuzzleBody
        puzzleNum={2}
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