import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
// let counter = 15

const addValue = () => {
  // console.log("Clicked", counter);
  if (counter >= 20) {
    console.log("counter cannont go above 20");
  }
  else {
    setCounter(counter + 1)
    // setCounter(counter + 1) 
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)  This all will not increment the counter directly from 15 to 20 as react works on batch processing

  // Even though u want to increment this no. of times then do below steps

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  
}


const removeValue = () => {
  if (counter <= 0) {
    console.log("counter cannot go below 0");
  }
  else{
    setCounter(counter - 1)
  }
}


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
