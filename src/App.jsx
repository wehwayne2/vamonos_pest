import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from "./Components/Title/Title"
import AboutUs from './Components/AboutUs/AboutUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "Our services" title = "What we offer"/>
        <Services />
        <AboutUs />
      </div>
    </div>
  )
}

export default App