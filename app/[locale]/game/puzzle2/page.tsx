'use client';
import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import CongratulationsMessage from '@/app/components/CongratulationsMessage';

export default function Page() {
  const t = useI18n();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);

  const checkboxes = [
    { id: "one", label: t('puzzles.box', {num: '1'}), checked: check1 },
    { id: "two", label: t('puzzles.box', {num: '2'}), checked: check2 },
    { id: "three", label: t('puzzles.box', {num: '3'}), checked: check3 },
    { id: "four", label: t('puzzles.box', {num: '4'}), checked: check4 },
    { id: "five", label: t('puzzles.box', {num: '5'}), checked: check5 },
    { id: "six", label: t('puzzles.box', {num: '6'}), checked: check6 },
    { id: "seven", label: t('puzzles.box', {num: '7'}), checked: check7 },
    { id: "eight", label: t('puzzles.box', {num: '8'}), checked: check8 },
    { id: "nine", label: t('puzzles.box', {num: '9'}), checked: check9 },

  ];

  const handleCheckboxChange = (whichBox: String) => {
    if (whichBox === 'one') {
      setCheck1(!check1);
        setCheck7(false);
    } else if (whichBox === 'two') {
      setCheck2(!check2);
        setCheck6(false);
    } else if (whichBox === 'three') {
      setCheck3(!check3);
        setCheck1(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
      setCheck5(false);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
        setCheck9(false);
    } else if (whichBox === 'six') {
      setCheck6(!check6);
      setCheck3(false);
    } else if (whichBox === 'seven') {
        setCheck7(!check7);
    } else if (whichBox === 'eight') {
        setCheck8(!check8);
        setCheck4(false);
    } else if (whichBox === 'nine') {
        setCheck9(!check9);
        setCheck2(false);
    };

    //8 4 5 9 2 6 3 1 7

  };
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: '2'})}: '{t('puzzles.2.title')}'</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">{t('puzzles.rules.rules')}</h2>
        <ol>
          <li>{t('puzzles.rules.checkall')}</li>
        </ol>
        <p></p>

        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.puzzle')}</h2>
        <p></p>
        {checkboxes.map((checkbox) => (
          <label key={checkbox.id}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </label>
        ))}

        </div>

        {check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9 ?
          <CongratulationsMessage href="/game/puzzle3" />
          : null}

      </section>
    )
}