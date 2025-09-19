import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  function handleClick() {
    alert('I am clicked 1.');
  }

  const handleClick2 = () => alert('click me 2');

  return (

    <>

      <h2>Vite + React</h2>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('click me 3.')}>Click Me 3</button>


      <button onClick={() => alert('click me 3.')}>Click Me 3</button>
      <button onClick={() => alert('click me 3.')}>Click Me 3</button>


    </>
  )
}

export default App
