'use client';
import React, { useState } from 'react';

export default function Page() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const handleCheckboxChange = (whichBox: String) => {
    if (whichBox === 'one') {
      setCheck1(!check1);
    } else if (whichBox === 'two') {
      setCheck2(!check2);
      setCheck3(false);
    } else if (whichBox === 'three') {
      setCheck3(!check3);
      setCheck5(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
      setCheck1(false);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
      setCheck4(false);
    }

    if (check1 && check2 && check3 && check4 && check5) {
      alert('Congratulations! You solved the puzzle');
    }

  };
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Puzzle 1: "Demo Short"</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Rules:</h2>
        <ol>
          <li>Check all the boxes to solve the puzzle :)</li>
        </ol>

        <div className="flex gap-4 items-left flex-col sm:flex-col">

          <div><input
            type="checkbox"
            checked={check1}
            onChange={() => handleCheckboxChange('one')}
          />
          <label>Box 1</label></div>

          <input
            type="checkbox"
            checked={check2}
            onChange={() => handleCheckboxChange('two')}
          />
          <label>Box 2</label>

          <input
            type="checkbox"
            checked={check3}
            onChange={() => handleCheckboxChange('three')}
          />
          <label>Box 3</label>

          <input
            type="checkbox"
            checked={check4}
            onChange={() => handleCheckboxChange('four')}
          />
          <label>Box 4</label>

          <input
            type="checkbox"
            checked={check5}
            onChange={() => handleCheckboxChange('five')}
          />
          <label>Box 5</label>


        </div>

      </section>
    )
}