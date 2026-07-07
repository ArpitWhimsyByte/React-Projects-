import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,SetNumberAllowed]=useState(false)
  const [characterAllowed,SetCharacterAllowed]=useState(false)
  const[password,SetPassword]=useState("")

// refHook
const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str +="{}[]!@#$%^&*()_+=-<>?/"

    for (let index = 1; index <= length; index++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
      
    }
    SetPassword(pass)

  },[length,numberAllowed,characterAllowed])

  const copyfunc=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
       <div className='w-screen max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='password'
          readOnly 
          ref={passwordRef}
          />
          <button onClick={copyfunc} className='text-white outline-none px-3 bg-blue-500 hover:bg-blue-600 rounded'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value) 
//                When you interact with an element (click, type, drag), the browser creates an event.
// That event automatically stores which element caused it in event.target.
// So e.target refers to the exact element you interacted with (button, input, slider, etc.).
// e.target.value gives the current value of that element (for example, the slider's position or the text you typed).
            }}
            />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{

              SetNumberAllowed((prev)=>!prev)
            }
            } 
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() =>
                 {
                  SetCharacterAllowed((prev) => !prev)
                }
                }
            />
            <label>Characters</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
