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
    } else if (whichBox === 'three') {
      setCheck3(!check3);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
    }
  };
  
    return (
      <section>
        <h1>Puzzle 1: "Demo Short"</h1>
        <h2>Rules:</h2>
        <p>Check all the boxes to solve the puzzle :)</p>

        <div>
          <input
            type="checkbox"
            checked={check1}
            onChange={() => handleCheckboxChange('one')}
          />
          <label>Box 1</label>

          <input
            type="checkbox"
            checked={check2}
            onChange={() => handleCheckboxChange('two')}
          />
          <label>Box 2</label>
        </div>

      </section>
    )
}