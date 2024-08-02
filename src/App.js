import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import User from './components/routes/User'
import Navbar from './components/routes/Navbar'

export default function App() {
  const [count,setCoount]= useState(0)
  return (
    <div>
      <button onClick={()=>setCoount(count+1)}>{count}</button>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
