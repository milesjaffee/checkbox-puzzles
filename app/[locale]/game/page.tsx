import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";
  
  export default function Page() {
    const t = useI18n();

    const puzzles = [
      { id: "puzzle1", label: "1. Tutorial", href: "/game/puzzle1" },
      { id: "puzzle2", label: "2. Tutorial (Long)", href: "/game/puzzle2" },
      { id: "puzzle3", label: "3. The Limit", href: "/game/puzzle3" },
      { id: "puzzle4", label: "4. Mini Golf", href: "/game/puzzle4" },
      { id: "puzzle5", label: "5. Dancing", href: "/game/puzzle5" },
    ];
  

    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('game.title')}</h1>
          <ul className="flex gap-4 items-left flex-col sm:flex-col">
        {puzzles.map(({ id, label, href }) => (
          <li key={id}>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-left bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      </section>
    )
  }
  