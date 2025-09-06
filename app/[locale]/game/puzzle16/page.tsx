'use client';
import React, { useState } from 'react';
import PuzzleBody from '@/app/components/PuzzleBody';
import { delayedChange, reset, randomClickOrder } from '@/app/components/PuzzleFunctions';

export default function Page() {
  const maxClicks = 16;
  const checkCount = 12;
  const [clickOrder] = useState(() => randomClickOrder(checkCount));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(true));
  const [clicks, setClicks] = useState(0);

    const delay = 3;
    const [clickQueue, setClickQueue] = useState<number[]>([]);
    const hidden = ['clicks'];
    const shuffleAfter = 5;
    const [order, setOrder] = useState([...Array(checkCount).keys()]);


  const rules = [
    'limit', 'limit-reset', 'shuffle', 'hidden', 'delay'
  ];
  
    return (
      <PuzzleBody
        puzzleNum={16}
        numBoxes={checkCount}
        maxClicks={maxClicks}
        clicks={clicks}
        checked={checked}

        handleChange={(index: number) => delayedChange({index, setChecked, clickOrder, setDone, 
          clicks, maxClicks, setClicks, 
          shuffleOrder: order, setShuffleOrder: setOrder, shuffleAfter,
          clickQueue, setClickQueue, delay
        
        })}
        reset={() => reset({setChecked, setClicks, checkCount, setOrder, setClickQueue})}

        done={done}
        rules={rules}
        order={order}
        hidden={hidden}
        delay={delay}
        shuffleAfter={shuffleAfter}
      />

    )
}

//todo
//handle puzzlefunctions stuff with checking for done within a puzzle
//reset also resets doneSubpuzzles
//body: gray out boxes when invalid
//also handle click orders only being within the boxes