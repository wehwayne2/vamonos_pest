import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from "./Components/Title/Title"
import AboutUs from './Components/AboutUs/AboutUs'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "Our services" title = "What we offer"/>
        <Services />
        <AboutUs />
        <Title subTitle = "testimonials" title = "What client says"/>
        <Testimonials />
        <Title subTitle = "contact us" title = "get in touch"/>
        <Contact />
      </div>
    </div>
  )
}

export default App