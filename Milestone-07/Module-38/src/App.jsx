
import { Suspense } from 'react'
import './App.css'
import Countries from './componant/Countries/Countries'

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {


  return (
    <>
      <Suspense fallback={<p>Nadir vai loading....</p>}>

        <Countries countryPromise={countryPromise}></Countries>

      </Suspense>
    </>
  )
}

export default App
