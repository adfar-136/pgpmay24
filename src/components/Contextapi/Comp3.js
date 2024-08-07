import React, { useContext } from 'react'
import { firstName } from '../../App'
export default function Comp3() {
const fName = useContext(firstName)
// console.log("data",fName)
  return (
    <div>
      <h1>{fName}</h1>
    </div>
  )
}
