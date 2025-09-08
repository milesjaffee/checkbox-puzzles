'use client';

import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLinkButton from "@/app/components/LocalizedLinkButton";
import MarkPuzzleDone from "@/app/components/MarkPuzzleDone";
import { puzzleKeys } from './puzzlekeys';

export default function CongratulationsMessage({href, puzzleNum, video}: {href?: string, puzzleNum?: number, video?: string}) {
    const t = useI18n();
    return (
        <div>
            <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">{t('puzzles.congratulations.title')}</h2>
            <p>{t('puzzles.congratulations.message')}</p>
            {puzzleNum &&
                <MarkPuzzleDone puzzleId={puzzleNum.toString()} />
            }
            {video && 
                <div className="mt-4">
                    <iframe
                        src={video}
                        title="Congratulations Video"
                        className="w-full h-64 sm:h-96 rounded-lg"
                        allowFullScreen
                    />
                </div>
            }
                
                <LocalizedLinkButton href={puzzleNum && puzzleNum < puzzleKeys.length ?
                    "/game/puzzle"+(puzzleNum+1) : href || "/game"
                    }>  
                    <p className="flex justify-between items-center w-full">
                <span>{
                    puzzleNum && puzzleNum < puzzleKeys.length ?
                    t('puzzles.congratulations.next') : href || t('puzzles.congratulations.last')
                    
                    }</span> <span className="flex-end align-self-right">{'==>'}</span></p>
                </LocalizedLinkButton>
            
        </div>
    );
    
}