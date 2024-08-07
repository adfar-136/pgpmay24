import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,setBgColor } from './actions'
export default function Counterr() {
    const count = useSelector((state)=>state.count)
    const bgColor = useSelector((state)=>state.bgColor)
    console.log(bgColor)
    const dispatch = useDispatch()
  return (
    <div style={{backgroundColor:bgColor.backgroundColor}}>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(setBgColor("green"))}>Green</button>
        <button onClick={()=>dispatch(setBgColor("blue"))}>Blue</button>
    </div>
  )
}
