import React, { useState, useEffect, useRef } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";

interface PuzzleBodyProps {
    puzzleNum: number;
    maxClicks?: number;
}

const PuzzleBody: React.FC<PuzzleBodyProps> = ({
    puzzleNum,
    maxClicks = 5,
}) => {
    const t = useI18n();
    return (
        <section>
                <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: puzzleNum.toString()})}: '{t(`puzzles.title.${puzzleNum.toString()}`) ?? ''}'</h1>
                <p></p>
                <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">{t('puzzles.rules.rules')}</h2>
                <ol>
                  <li>{t('puzzles.rules.limit', {limit: 
                    <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                    {maxClicks}
                    </code>
                  })}</li>
                  <li>{t('puzzles.rules.limit-reset')}</li>
                </ol>
                <p></p>
                <div className="flex gap-4 items-left flex-col sm:flex-col">
        
                <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.puzzle')}</h2>
                <p></p>
                {/*order.map((i) => (
                  <label key={i}>
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => handleChange(i)}
                      disabled={clicks >= maxClicks}
                    />
                    {t('puzzles.box', {num: (i + 1).toString()})}
                  </label>
                ))}
        
                  <div>
                  <p>{t('puzzles.clicks.clicks', {num: clicks})}</p>
                  <button
        
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    onClick={reset}>{t('puzzles.clicks.reset')}</button>
                  </div>
         
        
                </div>
        
                {done?
                  <CongratulationsMessage puzzleNum={3} />
                  : null*/}
                  </div>
        
              </section>
    );
};

export default PuzzleBody;