import React, { useEffect, useState } from 'react'

export default function Github() {
    const [user,setUser] = useState("")
    const [text,setText] = useState("adfar-136")
    useEffect(()=>{
        handleUser(text)
    },[text])
    async function handleUser(x){
        let data = await fetch(`https://api.github.com/users/${x}`)
        let response = await data.json()
        setUser(response.name)
    }
  return (
    <div>
        <h1>{user}</h1>
        <input type="text" value={text}
        onChange={(e)=>setText(e.target.value)}/>
        
    </div>
  )
}
