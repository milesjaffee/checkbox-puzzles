'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset } from '@/app/components/PuzzleFunctions';

export default function Page() {

  const maxClicks = 9;
  const checkCount = 6;
  const shuffleAfter = 4;
  const clickOrder = [5, 2, 1, 3, 4, 6];
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = [
    'limit', 'shuffle', 'limit-reset',
  ];
  
    return (
      <PuzzleBody
        puzzleNum={5}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}

        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, finalState, setDone, 
          clicks, maxClicks, setClicks, 
          order, setOrder, shuffleAfter})}

        reset={() => reset({setChecked, setClicks, checkCount, setOrder})}

        finalState={finalState}
        done={done}
        rules={rules}

        order={order}
        shuffleAfter={shuffleAfter}
      />
    )
}