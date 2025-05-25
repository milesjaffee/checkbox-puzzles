'use client';
import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";

export default function Page() {
  const t = useI18n();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const checkboxes = [
    { id: "one", label: t('puzzles.box', {num: '1'}), checked: check1 },
    { id: "two", label: t('puzzles.box', {num: '2'}), checked: check2 },
    { id: "three", label: t('puzzles.box', {num: '3'}), checked: check3 },
    { id: "four", label: t('puzzles.box', {num: '4'}), checked: check4 },
    { id: "five", label: t('puzzles.box', {num: '5'}), checked: check5 },
  ];

  const handleCheckboxChange = (whichBox: String) => {
    if (whichBox === 'one') {
      setCheck1(!check1);
      setCheck4(false);
    } else if (whichBox === 'two') {
      setCheck2(!check2);
      setCheck5(false);
    } else if (whichBox === 'three') {
      setCheck3(!check3);
      setCheck2(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
      setCheck1(false);
    };

  };
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: '1'})}: '{t('puzzles.1.title')}'</h1>
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

        {check1 && check2 && check3 && check4 && check5 ?
          <div>
            <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.congratulations.title')}</h2>
            <p>{t('puzzles.congratulations.message')}</p>
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
                
              <LocalizedLink href="/game/puzzle2">  
                {t('puzzles.congratulations.next')}
              </LocalizedLink>
            </button>
          </div>
          : null}

      </section>
    )
}