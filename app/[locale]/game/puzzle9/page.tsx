'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const [maxClicks, setMaxClicks] = useState(13);
  const checkCount = 7;
  const decreaseAmount = 1;
  const clickOrder = [2, 7, 6, 3, 5, 1, 4];
  const finalState = Array(checkCount).fill(true);

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = [ 'limit', 'limit-reset', 'decrease' ];
  
    return (
        <PuzzleBody
        puzzleNum={9}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        
        checked={checked}
        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, finalState, setDone, 
                          clicks, maxClicks, setClicks})}
                        reset={() => reset({setChecked, setClicks, checkCount, setMaxClicks, decreaseAmount})}
        finalState={finalState}
        done={done}
        rules={rules}

        decreaseAmount={decreaseAmount}
      />
    )
}