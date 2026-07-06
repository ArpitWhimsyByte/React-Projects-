import React, { useState } from "react";

const arrays=[
    {text:"Doing what you love is the cornerstone of having abundance in your life.",
    author:"Wayne Dyer"
    },
    {text:"You are important enough to ask and you are blessed enough to receive back.",
    author:"Wayne Dyer"
    },
    {text:"It is in your moments of decision that your destiny is shaped.",
    author:"Tony Robbins"
    },
    {text:"Life is like riding a bicycle. To keep your balance you must keep moving.",
    author:"Albert Einstein"
    },
]
function Quote(){
    const[quote,Setquote]=useState({text:"Nothing Just Smile",author:"Arpit"})
    const randomquote=()=>{
        let rindex=Math.floor(Math.random() * (arrays.length - 0 )) + 0;
        return (arrays[rindex])
    }
    const quotechanger=()=>{
        Setquote(randomquote())
    }
    return(
        <>
        <div className="h-screen flex flex-col items-center justify-center gap-20">
            <div className="border-black-400">
                 <p className="text-2xl font-semibold">{quote.text}</p>
  <p className="mt-4 text-lg italic">— {quote.author}</p>
                </div>
        <button onClick={quotechanger} className="bg-sky-500 hover:bg-sky-700 px-6 py-3">Random Quote Generator</button>

        </div>
       
        </>
    )
}

export default Quote