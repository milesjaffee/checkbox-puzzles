'use client';
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLinkButton from "@/app/components/LocalizedLinkButton";
import { useEffect, useState } from "react";
  
  export default function Page() {
    const t = useI18n();

    const puzzleKeys = [
      "puzzles.1.title",
      "puzzles.2.title",
      "puzzles.3.title",
      "puzzles.4.title",
      "puzzles.5.title",
      "puzzles.6.title",
      "puzzles.7.title",
      "puzzles.8.title",
      "puzzles.9.title",
    ] as const;

    const [completed, setCompleted] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchCompleted = async () => {
        try {
          const res = await fetch(`/api/puzzle/progress`);
          const { completedPuzzles } = await res.json();
          setCompleted(completedPuzzles || []);
        } catch (error) {
          console.error("Error fetching completed puzzles", error);
          setCompleted([]);
        } finally {
          setLoading(false);
        }
      };
  
      loading ? fetchCompleted() : null;
    }, []);

    return (
      <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('game.title')}</h1>
        <ul className="flex gap-4 items-left flex-col sm:flex-col">
          {Array.from({ length: puzzleKeys.length }, (key, index) => {
          const id = `puzzle${index + 1}`;
          const label = t(puzzleKeys[index]) ?? `Puzzle ${index + 1}`;
          const href = `/game/${id}`;
          return (
            <li key={id}>
            
              <LocalizedLinkButton href={href}>
                 {index + 1}. {label} {completed.includes(index) ? (
                <span className="rounded-lg border border-green-500 bg-green-500/20 px-2 py-1 mx-3">
                  {t('auth.done')}
                </span>
                ) : null}
              </LocalizedLinkButton>
            </li>
          );
          })}
      </ul>
      <p className="text-sm mt-8 italic">{t('game.emailme', {email: 
        <a href="mailto:mej327@lehigh.edu" className="text-blue-500 hover:underline">mej327@lehigh.edu</a>
      })}</p>
      </section>
    )
  }
  