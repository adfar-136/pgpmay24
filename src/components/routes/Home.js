import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Home compinent</h1>
        <button onClick={()=>navigate(-2)}>Prev</button>
    </div>
  )
}
