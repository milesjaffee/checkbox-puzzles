"use client";
import Image from "next/image";
import { useI18n, useScopedI18n } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";

export default function Home() {
  const t = useI18n();
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          //className="dark:invert"
          src={t('homepage.imgsrc') ?? "@public/checkbox nightmare.png"}
          alt={t('homepage.imagealt') ?? "Checkbox Nightmare logo"}
          width={400}
          height={200}
          unoptimized
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            {t('homepage.checkbox.1')}{" "}
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              {t('homepage.checkbox.2')}
            </code>
            {" "}{t('homepage.checkbox.3')}
          </li>
          <li className="tracking-[-.01em]">
            {t('homepage.simple')}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full flex flex-row border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <LocalizedLink
              href="/game">

              <div className="flex flex-row items-center justify-center gap-2.5">
                <Image
                  //className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                  style={{ transform: "rotate(90deg)" }}
                />
                {t('homepage.playnow')}
                </div>

            </LocalizedLink>
          </button>
          <button
            className="rounded-full border border-solid border-black/[.2] transition-colors flex items-center justify-center hover:bg-[#f2f2f277] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            <LocalizedLink href="https://milesjaffee.substack.com">
              {t('homepage.readblog')}
            </LocalizedLink>
            
          </button>
        </div>
      </main>
      
    </div>
  );
}
