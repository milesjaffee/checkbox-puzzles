'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 8;
  const checkCount = 7;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));
  const finalState = (Array(checkCount).fill(false));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(true));
  const [clicks, setClicks] = useState(0);

  const rules = [
    'uncheck',
    'limit',
    'limit-reset',
  ]
  
    return (
      <PuzzleBody
        puzzleNum={6}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        
        checked={checked}
        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, finalState, setDone, 
                  clicks, maxClicks, setClicks, direction: true})}
        
                reset={() => reset({setChecked, setClicks, checkCount, originalState: Array(checkCount).fill(true)})}
                
        done={done}
        rules={rules}
      />
    )
}