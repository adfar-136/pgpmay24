import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate =useNavigate()
  function handleContact(){
      navigate("/contact")
  }
  
  return (
    <div>
        <h1>About Page</h1>
         <button onClick={handleContact}>Contact</button>
    </div>
  )
}
