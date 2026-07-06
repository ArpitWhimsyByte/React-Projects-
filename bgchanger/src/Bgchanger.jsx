import React from "react";
import { useState } from "react";


function BgChanger(){
    const[bgColor,setBgColor]=useState("white");
    const getRandomHexColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
};
    const changeColor=()=>{
        setBgColor(getRandomHexColor())
    }
    return(
        <>
        <div className="w-screen h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
        <button onClick={changeColor} className="bg-yellow-400 rounded-xl px-6 py-3">Click Me</button>
        </div>
        </>
    )

}

export default BgChanger