'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 9;
  const clickOrder = [8, 9, 3, 4, 6, 5, 2, 1, 7];
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = ['checkall'];
  
    return (
      <PuzzleBody
              puzzleNum={2}
              numBoxes={checkCount}
              //maxClicks={maxClicks}
              //clicks={clicks}
              //no order here
              checked={checked}
              handleChange={(index: number) => { 
                        handleChange({index, setChecked, clickOrder, finalState, setDone, });
                      }}
              //reset={reset}
              finalState={finalState}
              done={done}
              rules={rules}
            />
    )
}