import React from 'react';

type OnChangeProps = {
    index: number;
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    clickOrder: number[];
    finalState: boolean[];
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
}
export function onChange(
    props: OnChangeProps
): void {
    const { index, setChecked, clickOrder, finalState, setDone } = props;
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

type ResetProps = {
    setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    setClicks: React.Dispatch<React.SetStateAction<number>>;
    checkCount: number;
    setOrder?: React.Dispatch<React.SetStateAction<number[]>>;
    originalState?: boolean[];
}
export function reset (props: ResetProps): void {
    const { setChecked, setClicks, checkCount, setOrder, originalState } = props;

    setChecked(originalState? originalState : Array(checkCount).fill(false));
    setClicks(0);
    setOrder? setOrder([...Array(checkCount).keys()]): null;
  };