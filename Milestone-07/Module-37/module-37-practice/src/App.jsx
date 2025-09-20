import { Suspense, useState } from 'react'
import './App.css'
import Batsman from './BatsMan';
import Counter from './counter';
import Friends from './friends';

const fetchFriend = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();

}

function App() {

  const friendsPromise = fetchFriend();

  function handleClick() {
    alert('I am clicked 1.');
  }

  const handleClick2 = () => alert('click me 2');

  return (

    <>

      <Suspense fallback={<h2>Friends are comming....</h2>}>

        <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>


      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('click me 3.')}>Click Me 3</button> */}


    </>
  )
}

export default App
