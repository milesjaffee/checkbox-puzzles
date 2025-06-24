'use client';

import React, { useState } from 'react';
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";
import MarkPuzzleDone from "@/app/components/MarkPuzzleDone";

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
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
                
                <LocalizedLink href={puzzleNum ?
                    "/game/puzzle"+(puzzleNum+1) : href || "/game"
                    }>  
                {t('puzzles.congratulations.next')}
                </LocalizedLink>
            </button>
        </div>
    );
    
}