import React from 'react'

export default function Contact({firstName,age,salary}) {
  
  return (
    <div>
      <h1>My Name is {firstName}</h1>
      <h1>My age is {age}</h1>
      {salary && <h1>My salary is {salary}</h1>}
    </div>
  )
}
