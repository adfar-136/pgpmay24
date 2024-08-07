import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Contact's component</h1>
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}
