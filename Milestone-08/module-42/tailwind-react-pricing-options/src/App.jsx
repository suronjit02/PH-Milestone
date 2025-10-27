
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PricingOptions from './components/PricingOption/PricingOptions'


const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>

      <header>
        <DaisyNav></DaisyNav>
      </header>

      <main>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

          <PricingOptions pricingPromise={pricingPromise}>  </PricingOptions>

        </Suspense>

      </main>

    </>
  )
}

export default App
