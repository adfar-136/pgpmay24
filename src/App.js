import React, { useState } from 'react'

export default function App() {
  const [condition,setCondition] = useState(false)
  function handleBackground(){
    setCondition(!condition)
  }
  return (
    <div style={{backgroundColor:condition?"black":"white",color:condition?"white":"black"}}>
      <h1>Hello, world!</h1>
      <p>This is a React app.</p>
      <button onClick={handleBackground}>{condition?"Light":"Dark"} Mode</button>
    </div>
  )
}
