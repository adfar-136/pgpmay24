import React, { useContext } from 'react'
import { myContext } from '../../App'
export default function Counter() {
    const {count,setCount} = useContext(myContext)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>++</button>
    </div>
  )
}
