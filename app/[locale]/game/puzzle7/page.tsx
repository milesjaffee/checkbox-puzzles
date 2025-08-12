'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 12;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));
  const finalState = [true, false, true, true, false, false, false, true, false, false, true, false]; //replace with music notes

  const notes = ['A', "A♯/B♭", 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));

  const imageUri = "/chord_gabce.png"

  const rules = [
    'chord', 'chord-notes',
  ];
 
    return (
      <PuzzleBody
        puzzleNum={7}
        numBoxes={checkCount}
        checked={checked}

        handleChange={(index: number) => {
          handleChange({index, setChecked, clickOrder, finalState, setDone, direction: true})
        }}

        finalState={finalState}
        done={done}
        rules={rules}

        video="https://youtube.com/embed/7nnpTOKWk-w"
        image={imageUri}
        notes = {['G, A, B, C', 'E']}
        customBoxNames = {notes}
      />
    )
}