import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import CongratulationsMessage from "@/app/components/CongratulationsMessage";
import { puzzleKeys } from "@/app/components/puzzlekeys";

interface PuzzleBodyProps {
    puzzleNum: number;
    numBoxes: number;
    clicks?: number;
    maxClicks?: number;
    order?: number[];
    checked?: boolean[];
    handleChange: (index: number) => void;
    reset?: () => void;
    finalState: boolean[];
    done: boolean;
    rules?: string[];

    shuffleAfter?: number;
    notes?: string[];
    decreaseAmount?: number;

}

const PuzzleBody: React.FC<PuzzleBodyProps> = ({
    puzzleNum,
    numBoxes,
    clicks = 0,
    maxClicks = 999,
    order = [...Array(numBoxes).keys()].map(i => i), // Default order is 1 to numBoxes
    checked = Array(numBoxes).fill(false), // Default checked state
    handleChange = (index: number) => {},
    reset,
    finalState,
    done,
    rules = [],
    shuffleAfter = 999,
    notes = [],
    decreaseAmount = 0,

}) => {
    const t = useI18n();

    const formatRules = (ruleKeys: string[]): ReactNode[] => {
        return ruleKeys.map((ruleKey) => {
            if (ruleKey === 'limit-reset') {
                return t('puzzles.rules.limit-reset');
            } else if (ruleKey === 'checkall') {
                return t('puzzles.rules.checkall');
            } else if (ruleKey === 'uncheck') {
                return t('puzzles.rules.uncheck');
            } else if (ruleKey === 'chord') {
                return t('puzzles.rules.chord');
            } 
            
            else if (ruleKey === 'limit') {
                return t('puzzles.rules.limit', {
                    limit: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {maxClicks} </code> ), });
            } else if (ruleKey === 'shuffle') {
                return t('puzzles.rules.shuffle', {
                    num: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {shuffleAfter? shuffleAfter: 'UNDEFINED'} </code> ), });
            } else if (ruleKey === 'chord-notes') {
                return t('puzzles.rules.chord-notes', {
                    notes1: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {notes[0]} </code> ), 
                    notes2: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {notes[1]} </code> ), 
                            });
            } else if (ruleKey === 'decrease') {
                return t('puzzles.rules.decrease', {
                    amount: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {decreaseAmount} </code> ), });
            }
            
            else {
                return '';
            }
        });
    };

    return (
        <section>
                <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('puzzles.number', {num: puzzleNum.toString()})}: '{t(puzzleKeys[puzzleNum-1])}'</h1>
                <p></p>
                <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">{t('puzzles.rules.rules')}</h2>
                <ol>
                  {formatRules(rules).map((rule, index) => (
                    <li key={index}>
                        {rule}
                    </li>
                  ))}
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
                      disabled={clicks >= maxClicks}
                    />
                    {t('puzzles.box', {num: (i+1).toString()})}
                  </label>
                ))}
        
                  {reset? <div>
                  <p>{t('puzzles.clicks.clicks', {num: clicks})}</p>
                  <button
        
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    onClick={reset}>{t('puzzles.clicks.reset')}</button>
                  </div>: null}
         
        
                </div>
        
                {done?
                  <CongratulationsMessage puzzleNum={puzzleNum} />
                  : null}
        
              </section>
    );
};

export default PuzzleBody;