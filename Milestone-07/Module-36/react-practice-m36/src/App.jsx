
import reactLogo from './assets/react.svg'
import './App.css'


import Todo from './Todo.jsx'

function App() {

  return (
    <>

      {/* <Todo task="anda paro" ></Todo> */}

      <Todo task="anda paro" isdone="true"></Todo>
      <Todo task="anda bikri koro" isdone="fals"></Todo>





      {/* <Student></Student>
      <Person></Person>
      <Developer name="ami nije" tech="JavaScript"></Developer>
      <Developer name="amr bow" tech="andaw pare na"></Developer>
      <Developer name="amr sala" tech="ekta boro maper vondo"></Developer>

      <Device name="Phone" brand="Mr. Samsung"></Device>
      <Device name="Laptop" brand="Hp"></Device>
      <Device name="Cula" brand="Walton"></Device>

      <Player name="Shakib" run="5600"></Player>
      <Player name="Liton" run="5200"></Player>
      <Player name="Abul"></Player>

      <Salami event="edemilladunnobi" amount="600"></Salami> */}


    </>
  )
}

function Salami({ event, amount }) {
  return (

    <div className='student'>
      <h2>Salami for: {event}</h2>
      <h2>Amount: {amount}</h2>
    </div>

  )
}

function Player({ name, run = 0 }) {

  return (
    <div className='student'>
      <h2>Name: {name}</h2>
      <h2>Run: {run}</h2>
    </div>
  )

}


function Device(props) {
  return (
    <div style={{
      color: 'teal',
      border: '2px solid white',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px'
    }}>
      <h3>Name: {props.name}</h3>
      <h3>Brand: {props.brand}</h3>
    </div>
  )
}


function Developer(props) {

  return (
    <div style={{
      color: 'green',
      border: '2px solid red',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px'
    }}>
      <h2>Developer: {props.name}</h2>
      <h2>Technology: {props.tech}</h2>
    </div>


  )
}



function Student() {
  return (
    <div className='student'>
      <h3>Name: </h3>
      <h3>Age: </h3>
    </div>
  )
}


function Person() {
  const age = 21;
  const name = 'Suronjit'

  const personStyle = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '38px'
  }

  return (
    <h2 style={personStyle}>I am {name} {age}</h2>
  )
}

function Sports() {
  return (
    <div>
      <h1>Badminton</h1>
      <p>I love Badminton.</p>
    </div>
  )
}

export default App
