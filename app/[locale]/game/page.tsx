'use client';
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";
  
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
    ] as const;

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
            <button
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-left bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
            >
              <LocalizedLink href={href}>
              {index + 1}. {label}
              </LocalizedLink>
            </button>
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
  