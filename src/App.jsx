import { useState } from 'react'
import Grid from './Components/Grid/Grid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Tic-Toe_World World</h1>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
