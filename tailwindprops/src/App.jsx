import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
// let obj={
//   username:"Arpit",
//   age:20    How can we Pass Objects and arrays , variables
// }
  return (
    <>
     <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind Test</h1>
     <Card username="ArpitCodes"   />
     <Card username="RathoreCodes" btnText="MoreMore" />
    </>
  )
}

export default App
