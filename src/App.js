import React, { useState } from 'react'

export default function App() {
  const [name,setName] = useState("")
  const [conditin,setcondition] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setcondition(true)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {conditin && <h1>{name}</h1>}
    </div>
  )
}
