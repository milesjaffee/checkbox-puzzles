'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { handleChange, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const checkCount = 8;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));
  const [clicks, setClicks] = useState(0);

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(true));

  const shuffleAfter = 5;
  const [order, setOrder] = useState([...Array(checkCount).keys()]);

  const rules = ['uncheck', 'all-previous', 'shuffle'];

  const onChange = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]); 

      const positionInOrder = clickOrder.indexOf(index + 1); 
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) { 

        for (let i = positionInOrder+1; i < clickOrder.length; i++) {
            
            newChecked[clickOrder[i]-1] = true;
        }
        //Automatically uncheck ALL prev boxes in the order
      }

      if (newChecked.every((val, idx) => val === false)) setDone(true);
      return newChecked;
    });
  }
  
    return (
      <PuzzleBody
        puzzleNum={14}
        numBoxes={checkCount}
        checked={checked}

        handleChange={(index: number) => { 
                  handleChange({index, setChecked, clickOrder, setDone, shuffleAfter, 
                    shuffleOrder: order, setShuffleOrder: setOrder, clicks, setClicks,
                    customOnChange: onChange,
                  });
                }}

        done={done}
        rules={rules}
        shuffleAfter={shuffleAfter}
        order={order}
      />
    )
}