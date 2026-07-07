import { useState } from 'react'

import './App.css'
import './index.css'

function App() {
  const [counter,setCounter] = useState(5)
  // let counter = 5
  const addValue = ()=>{
  //  counter = counter+1
  setCounter(counter+1)
  }
  const decValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>
        Superman React JS
      </h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Increment</button>
      <br/>
      <button onClick={decValue}>Decrement</button>
      <p>footer : {counter} </p>

    </>
  )
}

export default App
