import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import CongratulationsMessage from "@/app/components/CongratulationsMessage";
import { puzzleKeys } from "@/app/components/puzzlekeys";

interface PuzzleBodyProps {
    //Evergreen
    puzzleNum: number;
    numBoxes: number; //Number of boxes
    clicks?: number; //Current click count. Only used if maxClicks is defined.
    maxClicks?: number; //Max allowed clicks before reset. If undefined, no limit
    order?: number[]; //Optional order of boxes. If undefined, defaults to 1 to numBoxes
    checked?: boolean[]; //Checked state of each box. If undefined, defaults to all permanently false
    handleChange: (index: number) => void; //Function to handle checkbox changes
    reset?: () => void; //Function to reset the puzzle state. If undefined, no reset button is shown
    done: boolean; //Is the puzzle solved?
    rules?: string[]; //Rules for the puzzle, used to display instructions. Given as a list of strings. Goes to the formatRules function here!

    //Puzzle specific or rare
    shuffleAfter?: number; //Number of clicks after which the boxes are shuffled. If undefined, no shuffle
    image?: string; //Image URI to display for the puzzle, used in rules
    notes?: string[]; //Notes for the puzzle, used in rules. Given as a list of 2 strings
    video?: string; //Video URI to display for the puzzle, used in the congratulations message
    keepIndex?: boolean; //Keep index while shuffling? Defaults to false. If true, the shown index of the boxes on screen is kept even after shuffling
    decreaseAmount?: number; //Amount to decrease maxClicks by when resetting the puzzle. If undefined, no decrease
    customBoxNames?: string[]; //Custom names for the boxes, if provided, will override the default box names

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
    done,
    rules = [],
    shuffleAfter = 999,
    image = '',
    video = '',
    notes = [],
    keepIndex = false,
    decreaseAmount = 0,
    customBoxNames = [],

}) => {
    const t = useI18n();

    const formatRules = (ruleKeys: string[]): ReactNode[] => {
        return ruleKeys.map((ruleKey) => {
            if (ruleKey === 'limit-reset') { return t('puzzles.rules.limit-reset');
            } else if (ruleKey === 'checkall') { return t('puzzles.rules.checkall');
            } else if (ruleKey === 'uncheck') { return t('puzzles.rules.uncheck');
            } 
            
            else if (ruleKey === 'chord') {
                return <div><p>{t('puzzles.rules.chord')}</p>
                    <img
                        src={image}
                        width={400}
                        height={200}
                    />
                </div>;
            } 
            
            else if (ruleKey === 'limit') { return t('puzzles.rules.limit', {
                    limit: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {maxClicks}</code> ), });

            } else if (ruleKey === 'shuffle') { return t('puzzles.rules.shuffle', {
                    num: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {shuffleAfter? shuffleAfter: 'UNDEFINED'}</code> ), });

            } else if (ruleKey === 'shuffle-checked') { return t('puzzles.rules.shuffle-checked', {
                    num: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {shuffleAfter? shuffleAfter: 'UNDEFINED'}</code> ), });
            

            } else if (ruleKey === 'chord-notes') { return t('puzzles.rules.chord-notes', {
                    notes1: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {notes[0]}</code> ), 
                    notes2: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {notes[1]}</code> ), });

            } else if (ruleKey === 'decrease') { return t('puzzles.rules.decrease', {
                    amount: ( <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                            {decreaseAmount}</code> ), });
            }
            
            else {
                return (ruleKey);
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
                {order.map((i, index) => (
                  <label key={i}>
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => handleChange(i)}
                      disabled={clicks >= maxClicks}
                    />
                    {
                    customBoxNames && customBoxNames[index] ? customBoxNames[index] :
                    keepIndex?
                    t('puzzles.box', {num: (index+1).toString()})
                    : t('puzzles.box', {num: (i + 1).toString()})
                    }
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
                  <CongratulationsMessage puzzleNum={puzzleNum} video={video} />
                  : null}
        
              </section>
    );
};

export default PuzzleBody;