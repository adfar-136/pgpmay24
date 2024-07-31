import React, { useEffect, useState } from 'react'
import JokeGEnerator from './components/JokeGEnerator'

export default function App() {
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(100)
  useEffect(()=>{
      console.log("adfar")
  },[count])
  return (
    <div>
      <JokeGEnerator/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Number :{number}</h1>
      <button onClick={() => setNumber(number - 1)}>-----</button>
    </div>
  )
}
