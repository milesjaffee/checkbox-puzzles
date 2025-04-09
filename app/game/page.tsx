'use client';
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

  
  
  export default function Page() {

    const [completedPuzzles, setCompletedPuzzles] = useLocalStorage<Record<number, boolean>>(
      "completedPuzzles",
      {}
    );

    if (completedPuzzles === null) {
      return <p>Loading...</p>;
    }
  

    useEffect(() => {
      if (typeof window !== "undefined") {
        try {
          setCompletedPuzzles(JSON.parse(localStorage.getItem("completedPuzzles") || "{}"));
          console.log(completedPuzzles);
        } catch (e) {
          console.error(e);
          setCompletedPuzzles({});
        }
        
      }
    }, []);

    const puzzles = [
      { id: 1, label: "Tutorial", href: "/game/puzzle1" },
      { id: 2, label: "Tutorial (Long)", href: "/game/puzzle2" },
      { id: 3, label: "The Limit", href: "/game/puzzle3" },
      { id: 4, label: "Mini Golf", href: "/game/puzzle4" },
      { id: 5, label: "Dancing", href: "/game/puzzle5" },
    ];
  

    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Checkbox Nightmare</h1>
          <ul className="flex gap-4 items-left flex-col sm:flex-col">
        {puzzles.map(({ id, label, href }) => (
          <li key={id}>

            {completedPuzzles[id] ?
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-left bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href={href}
            >
              {id}. {label}
            </a>
            :
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-left bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href={href}
              style={{ pointerEvents: "none", opacity: "0.6" }}
            >
              {id}. {label}
            </a>
      }
          </li>
        ))}
      </ul>
      </section>
    )
  }
  