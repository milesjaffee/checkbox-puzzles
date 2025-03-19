'use client';
import React, { useState } from 'react';

export default function Page() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const checkboxes = [
    { id: "one", label: "Box 1", checked: check1 },
    { id: "two", label: "Box 2", checked: check2 },
    { id: "three", label: "Box 3", checked: check3 },
    { id: "four", label: "Box 4", checked: check4 },
    { id: "five", label: "Box 5", checked: check5 },
  ];

  const handleCheckboxChange = (whichBox: String) => {
    if (whichBox === 'one') {
      setCheck1(!check1);
      setCheck4(false);
    } else if (whichBox === 'two') {
      setCheck2(!check2);
      setCheck5(false);
    } else if (whichBox === 'three') {
      setCheck3(!check3);
      setCheck2(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
      setCheck1(false);
    };

  };
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Puzzle 1: "Tutorial"</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Rules:</h2>
        <ol>
          <li>Check all the boxes to solve the puzzle :)</li>
        </ol>
        <p></p>

        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">Puzzle</h2>
        <p></p>
          {checkboxes.map((checkbox) => (
          <label key={checkbox.id}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </label>
        ))}


        </div>

        {check1 && check2 && check3 && check4 && check5 ?
          <div>
            <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Congratulations!</h2>
            <p>You solved the puzzle! </p>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle2"
                //target="_blank"
                //rel="noopener noreferrer"
                >
                Play Next Puzzle
                </a>
          </div>
          : null}

      </section>
    )
}