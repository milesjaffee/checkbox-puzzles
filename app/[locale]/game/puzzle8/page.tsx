'use client';
import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import CongratulationsMessage from '@/app/components/CongratulationsMessage';

export default function Page() {
  const t = useI18n();
  const maxClicks = 18;
  const checkCount = 8;
  const shuffleAfter = 3;
  const clickOrder = [6, 1, 3, 5, 2, 4, 8, 7];
  const finalState = (Array(checkCount).fill(true));

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  const [order, setOrder] = useState([...Array(checkCount).keys()]);

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
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: '8'})}: '{t('puzzles.8.title')}'</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">{t('puzzles.rules.rules')}</h2>
        <ol>
          <li>{t('puzzles.rules.limit', {limit: 
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            {maxClicks}
            </code>
          })}</li>
          <li>{t('puzzles.rules.shuffle', {num: 
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            {shuffleAfter}
            </code>
          })}</li>
          <li>{t('puzzles.rules.limit-reset')}</li>
        </ol>
        <p></p>
        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.puzzle')}</h2>
        <p></p>
        {order.map((i, index) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => handleChange(i)}
              disabled={clicks >= maxClicks}
            />
            {t('puzzles.box', {num: (index + 1).toString()})}
          </label>
        ))}

          <div>
          <p>{t('puzzles.clicks.clicks', {num: clicks})}</p>
          <button

            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={reset}>{t('puzzles.clicks.reset')}</button>
          </div>

        </div>

        {done ?
          <CongratulationsMessage puzzleNum={8} />
          : null}

      </section>
    )
}