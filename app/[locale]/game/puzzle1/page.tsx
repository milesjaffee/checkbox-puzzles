'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';

export default function Page() {
  const checkCount = 5;
  const clickOrder = [3, 2, 5, 1, 4];
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  //const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = ['checkall'];

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
    onChange(index);
  };
  
    return (
      <PuzzleBody
        puzzleNum={1}
        numBoxes={checkCount}
        //maxClicks={maxClicks}
        //clicks={clicks}
        //no order here
        checked={checked}
        handleChange={handleChange}
        //reset={reset}
        finalState={finalState}
        done={done}
        rules={rules}
      />
    )
}