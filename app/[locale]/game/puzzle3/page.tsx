'use client';
import React, { useState } from 'react';

export default function Page() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  const [numClicks, setNumClicks] = useState(0);
  const setchecks = [setCheck1, setCheck2, setCheck3, setCheck4, setCheck5, setCheck6];

  const checkboxes = [
    { id: "one", label: "Box 1", checked: check1 },
    { id: "two", label: "Box 2", checked: check2 },
    { id: "three", label: "Box 3", checked: check3 },
    { id: "four", label: "Box 4", checked: check4 },
    { id: "five", label: "Box 5", checked: check5 },
    { id: "six", label: "Box 6", checked: check6 },
  ];

  const handleCheckboxChange = (whichBox: String) => {
    setNumClicks(numClicks + 1);
    if (whichBox === 'one') {
      setCheck1(!check1);
        setCheck3(false);
      
    } else if (whichBox === 'two') {
      setCheck2(!check2);
        
    } else if (whichBox === 'three') {
      setCheck3(!check3);
        setCheck6(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
      setCheck1(false);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
        setCheck2(false);
    } else if (whichBox === 'six') {
      setCheck6(!check6);
      setCheck5(false);
    } else if (whichBox === 'reset') {
      setchecks.forEach(setcheck => {
        setcheck(false);
      });
      setNumClicks(0);
    }

    //4 1 3 6 5 2

  };
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Puzzle 3: "The Limit"</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Rules:</h2>
        
        <ol>
          <li>Check all the boxes in only {" "}
          <code className="bg-black/[.05] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              10
            </code>
            
            {" "}clicks.</li>
          <li>Hit "reset" to reset.</li>
        </ol>
        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mt-8 tracking-tighter font-italic">Puzzle</h2>
        <p></p>
        {checkboxes.map((checkbox) => (
          <label key={checkbox.id}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
              disabled={numClicks>9}
            />
            {checkbox.label}
          </label>
        ))}

          <div>
            <p>Current clicks: {numClicks}</p>
          <button

            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={() => handleCheckboxChange('reset')}>RESET</button>
          </div>
 

        </div>

        {check1 && check2 && check3 && check4 && check5 && check6 ?
          <div>
            <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Congratulations!</h2>
            <p>You solved the puzzle! </p>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle4"
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