import React, { useEffect } from 'react'

export default function JokeGEnerator() {
    const [joke, setJoke] = React.useState('')
    useEffect(()=>{
        handleJoke()
    },[])
    function handleJoke(){
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((result)=>result.json())
        .then((response)=>setJoke(response))
    }
  return (
    <div>
        <h1>Joke Generator</h1>
        <h2>SetUp:{joke.setup}</h2>
        <h2>Punchline:{joke.punchline}</h2>
        <button onClick={handleJoke}>GenerateJoke</button>
    </div>
  )
}
