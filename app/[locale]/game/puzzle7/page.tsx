'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';

export default function Page() {
  const checkCount = 12;
  const clickOrder = [4, 5, 10, 2, 8, 3, 6, 2, 12, 9, 11, 9, 1, 7, 5, ];
  const finalState = [true, false, true, true, false, false, false, true, false, false, true, false]; //replace with music notes

  const notes = ['A', "A♯/B♭", 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const imageUri = "/chord_gabce.png"

const rules = [
  'chord', 'chord-notes',
];

  const onChange = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]);

      const positionInOrder = clickOrder.indexOf(index + 1);
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) {
        const nextIndex = clickOrder[positionInOrder + 1];
        newChecked[nextIndex-1] = true; // Automatically check the next box in order
      }

      if (newChecked.every((val, idx) => val === finalState[idx])) setDone(true);
      return newChecked;
    });
  }

  const handleChange = (index: number) => {
    setClicks(c => c + 1);
    onChange(index);
  };
  
    return (
      <PuzzleBody
        puzzleNum={7}
        numBoxes={checkCount}
        //maxClicks={maxClicks}
        //clicks={clicks}
        checked={checked}
        handleChange={handleChange}
        //reset={reset}
        finalState={finalState}
        done={done}
        rules={rules}

        video="https://youtube.com/embed/7nnpTOKWk-w"
        image={imageUri}
        notes = {['G, A, B, C', 'E']}
      />
    )
}