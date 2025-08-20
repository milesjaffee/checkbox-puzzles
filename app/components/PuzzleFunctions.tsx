import React, { useEffect } from 'react';

//Exports onChange, handleChange, reset, shuffle, and randomClickOrder functions

type OnChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState?: boolean[];
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
    direction: boolean;
}
export function onChange(
    props: OnChangeProps
): void {
    const { index, setChecked, clickOrder, finalState, setDone, direction } = props;
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !(newChecked[index]);

      const positionInOrder = clickOrder.indexOf(index + 1);
      if (positionInOrder >= 0 && positionInOrder < (clickOrder.length-1)) {
        const nextIndex = clickOrder[positionInOrder + 1];
        newChecked[nextIndex-1] = direction; // Automatically uncheck the next box in order, make it false (default) or true (if this is an unchecking puzzle)
      }

      if (newChecked.every((val, idx) => val === (finalState? finalState[idx]: true))) setDone(true);
      console.log("onChange happened, index"+index);
      return newChecked;
    });
  }


type HandleChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState?: boolean[];
    setDone: React.Dispatch<React.SetStateAction<boolean>>;

    clicks?: number;
    maxClicks?: number;
    setClicks?: React.Dispatch<React.SetStateAction<number>>;

    shuffleAfter?: number;
    shuffleOrder?: any[]; //actually just whatever is getting shuffled
    setShuffleOrder?: React.Dispatch<React.SetStateAction<any[]>>;

    customOnChange?: (index: number) => void;

    direction?: boolean;

    clickQueue?: number[];
    setClickQueue?: React.Dispatch<React.SetStateAction<number[]>>;
    delay?: number;
}
export function handleChange (props: HandleChangeProps): void {

    let { index, setChecked, clickOrder, finalState, setDone, 
        clicks, maxClicks, setClicks, shuffleAfter, shuffleOrder, setShuffleOrder, customOnChange, direction, setClickQueue, delay } = props;
    
    if (clicks && maxClicks && clicks >= maxClicks) return;
    if (setClicks) setClicks(c => c + 1);

    if (shuffleAfter && clicks && shuffleOrder && setShuffleOrder && (clicks+1) % shuffleAfter === 0) shuffle({order: shuffleOrder, setOrder: setShuffleOrder});

    if (delay) {
        const newElement = index;

        // Add to queue
        setClickQueue!(prevQueue => {
            const updatedQueue = prevQueue ? [...prevQueue, newElement] : [newElement];
            
            // Check if we need to process anything
            if (updatedQueue.length > delay) {
                const processIndex = prevQueue[0];
                console.log("Processing:", processIndex);
                
                // Process the item
                setTimeout(() => {
                    customOnChange ? customOnChange(processIndex)
                    : onChange({ 
                        index: processIndex, 
                        setChecked, 
                        clickOrder, 
                        finalState, 
                        setDone, 
                        direction: direction ? true : false 
                    });
                }, 1000);
                
                // Return the queue without the processed item
                return updatedQueue.slice(1);
            }
            
            console.log("Queue:", updatedQueue);
            return updatedQueue;
        });
  
    }
        
    else {
        customOnChange ? customOnChange(index)
        : onChange({ index, setChecked, clickOrder, finalState, setDone, direction: direction ? true : false });
    }
  
  };

type ResetProps = {
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    setClicks: React.Dispatch<React.SetStateAction<number>>;
    checkCount: number;

    setOrder?: React.Dispatch<React.SetStateAction<number[]>>;
    originalState?: boolean[];
    setMaxClicks?: React.Dispatch<React.SetStateAction<number>>;
    decreaseAmount?: number;
    setTotalResets?: React.Dispatch<React.SetStateAction<number>>;
    setClickQueue?: React.Dispatch<React.SetStateAction<number[]>>;
}
export function reset (props: ResetProps): void {
    const { setChecked, setClicks, checkCount, setOrder, originalState, setMaxClicks, decreaseAmount, setTotalResets, setClickQueue } = props;

    setChecked(originalState? originalState : Array(checkCount).fill(false));
    setClicks(0);
    setOrder? setOrder([...Array(checkCount).keys()]): null;
    if (setMaxClicks && decreaseAmount) setMaxClicks(prev => prev - decreaseAmount);
    if (setTotalResets) setTotalResets(prev => prev - 1);
    if (setClickQueue) setClickQueue([]);
  };


type ShuffleProps = {
    order: any[];
    setOrder: React.Dispatch<React.SetStateAction<any[]>>;
}
export function shuffle (props: ShuffleProps): void {
    const { order, setOrder } = props;
    const shuffled = [...order];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
  };


export function randomClickOrder (checkCount: number): number[] {
    const order = Array.from({ length: checkCount }, (_, i) => i + 1);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }