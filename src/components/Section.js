import React from 'react'
import Footer from './Footer'

export default function Section({rollno,Marks,subject,children}) {
  return (
    <div>
        <h1>Section Component</h1>
        {children}
        <Footer roll={rollno} marks={Marks} subject={subject}/>
    </div>
  )
}
