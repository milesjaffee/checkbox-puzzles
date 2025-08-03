'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';

export default function Page() {
  const maxClicks = 8;
  const checkCount = 7;
  const clickOrder = [6, 4, 3, 1, 2, 7, 5];
  const finalState = (Array(checkCount).fill(false));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(true));
  const [clicks, setClicks] = useState(0);
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = [
    'uncheck',
    'limit',
    'limit-reset',
  ]

  const onChange = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]);

      const positionInOrder = clickOrder.indexOf(index + 1);
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) {
        const nextIndex = clickOrder[positionInOrder + 1];
        newChecked[nextIndex-1] = true; // Changed for unique puzzle
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
    setChecked(Array(checkCount).fill(true));
    setClicks(0);
    //setOrder([...Array(checkCount).keys()]);
  };
  
    return (
      <PuzzleBody
        puzzleNum={6}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        
        checked={checked}
        handleChange={handleChange}
        reset={reset}
        finalState={finalState}
        done={done}
        rules={rules}
      />
    )
}