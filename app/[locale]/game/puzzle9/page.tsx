'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const [maxClicks, setMaxClicks] = useState(13);
  const checkCount = 7;
  const decreaseAmount = 1;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);

  const rules = [ 'limit', 'limit-reset', 'decrease' ];
  
    return (
        <PuzzleBody
        puzzleNum={9}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        
        checked={checked}
        handleChange={(index: number) => handleChange({index, setChecked, clickOrder, setDone, 
                          clicks, maxClicks, setClicks})}
                        reset={() => reset({setChecked, setClicks, checkCount, setMaxClicks, decreaseAmount})}

        done={done}
        rules={rules}

        decreaseAmount={decreaseAmount}
      />
    )
}