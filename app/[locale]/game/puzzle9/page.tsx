'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';

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

  const onChange = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]);

      const positionInOrder = clickOrder.indexOf(index + 1);
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) {
        const nextIndex = clickOrder[positionInOrder + 1];
        newChecked[nextIndex-1] = false; // Automatically uncheck the next box in order
      }

      if (newChecked.every((val, idx) => val === finalState[idx])) setDone(true);
      return newChecked;
    });
  }

  const handleChange = (index: number) => {
    if (clicks >= maxClicks) return;
    setClicks(c => c + 1);
    onChange(index);
  };

  const reset = () => {
    setChecked(Array(checkCount).fill(false));
    setClicks(0);

    //puzzle specific
    setMaxClicks(prev => prev - decreaseAmount);
    //setOrder([...Array(checkCount).keys()]);

  };
  
    return (
        <PuzzleBody
        puzzleNum={9}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        
        checked={checked}
        handleChange={handleChange}
        reset={reset}
        finalState={finalState}
        done={done}
        rules={rules}

        decreaseAmount={decreaseAmount}
      />
    )
}