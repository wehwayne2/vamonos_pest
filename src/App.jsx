import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className= "container">
   <Services />
      </div>
   
    </div>
  )
}

export default App