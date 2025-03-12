'use client';
import React, { useState } from 'react';

export default function Page() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);

  const handleCheckboxChange = (whichBox: String) => {
    if (whichBox === 'one') {
      setCheck1(!check1);
        setCheck7(false);
    } else if (whichBox === 'two') {
      setCheck2(!check2);
        setCheck6(false);
    } else if (whichBox === 'three') {
      setCheck3(!check3);
        setCheck1(false);
    } else if (whichBox === 'four') {
      setCheck4(!check4);
      setCheck5(false);
    } else if (whichBox === 'five') {
      setCheck5(!check5);
        setCheck9(false);
    } else if (whichBox === 'six') {
      setCheck6(!check6);
      setCheck3(false);
    } else if (whichBox === 'seven') {
        setCheck7(!check7);
    } else if (whichBox === 'eight') {
        setCheck8(!check8);
        setCheck4(false);
    } else if (whichBox === 'nine') {
        setCheck9(!check9);
        setCheck2(false);
    };

    checkDone();

    //8 4 5 9 2 6 3 1 7

  };

  const checkDone = () => {
    /*if (check1 && check2 && check3 && check4 && check5) {
      alert('Congratulations! You solved the puzzle');
    }*/
  }
  
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Puzzle 2: "Long Demo"</h1>
        <p></p>
        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Rules:</h2>
        <p>Check all the boxes to solve the puzzle :)</p>

        <div className="flex gap-4 items-left flex-col sm:flex-col">

        <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Puzzle</h2>

          <div><input
            type="checkbox"
            checked={check1}
            onChange={() => handleCheckboxChange('one')}
          />
          <label>{" "}Box 1</label></div>

          <div><input
            type="checkbox"
            checked={check2}
            onChange={() => handleCheckboxChange('two')}
          />
          <label>{" "}Box 2</label></div>

          <div><input
            type="checkbox"
            checked={check3}
            onChange={() => handleCheckboxChange('three')}
          />
          <label>{" "}Box 3</label></div>

          <div><input
            type="checkbox"
            checked={check4}
            onChange={() => handleCheckboxChange('four')}
          />
          <label>{" "}Box 4</label></div>

          <div><input  type="checkbox" checked={check5} onChange={() => handleCheckboxChange('five')}   />  
          <label>{" "}Box 5</label></div>
        
          <div><input  type="checkbox" checked={check6} onChange={() => handleCheckboxChange('six')}   />  
          <label>{" "}Box 6</label></div>

          <div><input  type="checkbox" checked={check7} onChange={() => handleCheckboxChange('seven')}   />  
          <label>{" "}Box 7</label></div>

          <div><input  type="checkbox" checked={check8} onChange={() => handleCheckboxChange('eight')}   />  
          <label>{" "}Box 8</label></div>

          <div><input  type="checkbox" checked={check9} onChange={() => handleCheckboxChange('nine')}   />  
          <label>{" "}Box 9</label></div>

        </div>

        {check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9 ?
          <div>
            <h2 className="font-semibold text-xl mb-8 tracking-tighter font-italic">Congratulations!</h2>
            <p>You solved the puzzle! </p>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/game/puzzle3"
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