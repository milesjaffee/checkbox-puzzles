import React from 'react';

type OnChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState: boolean[];
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

      if (newChecked.every((val, idx) => val === finalState[idx])) setDone(true);
      return newChecked;
    });
  }


type HandleChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState: boolean[];
    setDone: React.Dispatch<React.SetStateAction<boolean>>;

    clicks?: number;
    maxClicks?: number;
    setClicks?: React.Dispatch<React.SetStateAction<number>>;

    shuffleAfter?: number;
    order?: number[];
    setOrder?: React.Dispatch<React.SetStateAction<number[]>>;

    direction?: boolean;
}
export function handleChange (props: HandleChangeProps): void {

    const { index, setChecked, clickOrder, finalState, setDone, clicks, maxClicks, setClicks, shuffleAfter, order, setOrder, direction } = props;
    if (clicks && maxClicks && clicks >= maxClicks) return;

    if (setClicks) setClicks(c => c + 1);

    onChange({index, setChecked, clickOrder, finalState, setDone, direction: direction? true : false});

    if (shuffleAfter && clicks && order && setOrder && (clicks+1) % shuffleAfter === 0) shuffle({order, setOrder});
  };

type ResetProps = {
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    setClicks: React.Dispatch<React.SetStateAction<number>>;
    checkCount: number;
    setOrder?: React.Dispatch<React.SetStateAction<number[]>>;
    originalState?: boolean[];
    setMaxClicks?: React.Dispatch<React.SetStateAction<number>>;
    decreaseAmount?: number;
}
export function reset (props: ResetProps): void {
    const { setChecked, setClicks, checkCount, setOrder, originalState, setMaxClicks, decreaseAmount } = props;

    setChecked(originalState? originalState : Array(checkCount).fill(false));
    setClicks(0);
    setOrder? setOrder([...Array(checkCount).keys()]): null;
    if (setMaxClicks && decreaseAmount) setMaxClicks(prev => prev - decreaseAmount);
  };


type ShuffleProps = {
    order: number[];
    setOrder: React.Dispatch<React.SetStateAction<number[]>>;
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