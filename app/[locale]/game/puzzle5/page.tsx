'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';

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

  const shuffle = () => {
    const shuffled = [...order];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
  };

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
    if ((clicks+1) % shuffleAfter === 0) shuffle();
  };

  const reset = () => {
    setChecked(Array(checkCount).fill(false));
    setClicks(0);
    setOrder([...Array(checkCount).keys()]);
  };
  
    return (
      <PuzzleBody
        puzzleNum={5}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}
        handleChange={handleChange}
        reset={reset}
        finalState={finalState}
        done={done}
        rules={rules}

        order={order}
        shuffleAfter={shuffleAfter}
      />
    )
}