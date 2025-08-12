'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 9;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = ['checkall'];
  
    return (
      <PuzzleBody
              puzzleNum={2}
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