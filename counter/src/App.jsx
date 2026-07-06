import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


 let [counter,setCounter] =useState(5)
//  let counter=5
const addvalue=()=>{
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  console.log("value added",counter)
  // counter=counter+1
}
const removevalue=()=>{
  if(counter>0){

    setCounter(counter-1)
  }
  console.log("value reduced",counter)
}
  return (
    <>
    <h1>Chai aur React1 </h1>
    <h2>
      Counter Value : {counter}
    </h2>
    <button onClick={addvalue}>Add Value{counter}</button>
    <button onClick={removevalue}>Remove value{counter}</button>
    </>
  )
}

export default App
