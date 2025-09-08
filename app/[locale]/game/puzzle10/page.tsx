'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 11;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));

  const rules = ['checkall', 'all-previous'];

  const onChange = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]); 

      const positionInOrder = clickOrder.indexOf(index + 1); 
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) { 

        for (let i = positionInOrder+1; i < clickOrder.length; i++) {
            
            newChecked[clickOrder[i]-1] = false;
        }
        //Automatically uncheck ALL prev boxes in the order
      }

      if (newChecked.every((val, idx) => val === true)) setDone(true);
      return newChecked;
    });
  }
  
    return (
      <PuzzleBody
        puzzleNum={10}
        numBoxes={checkCount}
        checked={checked}

        handleChange={(index: number) => { 
                  handleChange({index, setChecked, clickOrder, setDone, 

                    customOnChange: onChange,
                  });
                }}

        done={done}
        rules={rules}
      />
    )
}