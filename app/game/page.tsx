export const metadata = {
    title: 'Puzzles',
    description: 'Checkbox game puzzles.',
  }
  
  export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Checkbox Nightmare</h1>
        <ol className="flex gap-4 items-left flex-col sm:flex-col">
            <li>
                <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle1"
                //target="_blank"
                //rel="noopener noreferrer"
                >
                1. Short Demo
                </a>
            </li>
            <li>
                <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle2"
                //target="_blank"
                //rel="noopener noreferrer"
                >
                2. Long Demo
                </a>
            </li>
            <li>
                <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle2"
                //target="_blank"
                //rel="noopener noreferrer"
                >
                3. Golf
                </a>
            </li>
        </ol>
      </section>
    )
  }
  