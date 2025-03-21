import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          //className="dark:invert"
          src="/checkbox nightmare.png"
          alt="Checkbox Nightmare logo"
          width={400}
          height={200}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            To progress, select each{" "}
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              checkbox
            </code>
            {" "}on the page.
          </li>
          <li className="tracking-[-.01em]">
            No, really - it's as simple as that! ;)
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/game"
            //target="_blank"
            //rel="noopener noreferrer"
          >
            <Image
              //className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
              style={{ transform: "rotate(90deg)" }}
            />
            Play now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.2] transition-colors flex items-center justify-center hover:bg-[#f2f2f277] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://milesjaffee.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my blog
          </a>
        </div>
      </main>
      
    </div>
  );
}
