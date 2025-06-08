'use client';
import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import CongratulationsMessage from '@/app/components/CongratulationsMessage';
import Image from 'next/image';

export default function Page() {
  const t = useI18n();
  const checkCount = 12;
  const clickOrder = [4, 5, 10, 2, 8, 3, 6, 2, 12, 9, 11, 9, 1, 7, 5, ];
  const finalState = [true, false, true, true, false, false, false, true, false, false, true, false]; //replace with music notes

  const notes = ['A', "A♯/B♭", 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];

  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(Array(checkCount).fill(false));
  const [clicks, setClicks] = useState(0);
  const [order, setOrder] = useState([...Array(checkCount).keys()]);

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
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: '7'})}: '{t('puzzles.7.title')}'</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">{t('puzzles.rules.rules')}</h2>
        <ol>
            <li>{t('puzzles.rules.chord')}

            <Image
                  src="/chord_gabce.png"
                    alt="Chord in bass clef with G, A, B, C, and E notes"
                    width={400}
                    height={200}
                ></Image>
            </li>

          <li>{t('puzzles.rules.chord-notes', {notes1: 
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            G, A, B, C,
            </code>,
            notes2: 
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            E
            </code>
          })}</li>
         
        </ol>
        <p></p>
        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.puzzle')}</h2>
        <p></p>
        {order.map((i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => handleChange(i)}
            />
            {notes[i]}
          </label>
        ))}

        </div>

        {done?
          <CongratulationsMessage href="/game" />
          : null}

      </section>
    )
}