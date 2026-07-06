import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BgChanger from './Bgchanger'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-400'>Tailwind working</h1> */}
      <BgChanger/>
    </>
  )
}

export default App
