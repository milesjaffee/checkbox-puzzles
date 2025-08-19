import React from 'react';

//Exports onChange, handleChange, reset, shuffle, and randomClickOrder functions

type OnChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState?: boolean[];
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
    direction?: boolean;
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
        newChecked[nextIndex-1] = direction? direction: false; // Automatically uncheck the next box in order
      }

      if (newChecked.every((val, idx) => val === (finalState? finalState[idx]: true))) setDone(true);
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
}
export function handleChange (props: HandleChangeProps): void {

    let { index, setChecked, clickOrder, finalState, setDone, clicks, maxClicks, setClicks, shuffleAfter, shuffleOrder, setShuffleOrder, customOnChange, direction } = props;
    
    if (clicks && maxClicks && clicks >= maxClicks) return;
    if (setClicks) setClicks(c => c + 1);

    if (shuffleAfter && clicks && shuffleOrder && setShuffleOrder && (clicks+1) % shuffleAfter === 0) shuffle({order: shuffleOrder, setOrder: setShuffleOrder});

    customOnChange? customOnChange(index)
    :
    onChange({index, setChecked, clickOrder, finalState, setDone, direction: direction? true: false});
  
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
}
export function reset (props: ResetProps): void {
    const { setChecked, setClicks, checkCount, setOrder, originalState, setMaxClicks, decreaseAmount, setTotalResets } = props;

    setChecked(originalState? originalState : Array(checkCount).fill(false));
    setClicks(0);
    setOrder? setOrder([...Array(checkCount).keys()]): null;
    if (setMaxClicks && decreaseAmount) setMaxClicks(prev => prev - decreaseAmount);
    if (setTotalResets) setTotalResets(prev => prev - 1);
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