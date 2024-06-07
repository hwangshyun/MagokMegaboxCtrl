import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PosterAdd from './components/PosterAdd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PosterAdd></PosterAdd>
    </>
  )
}

export default App
