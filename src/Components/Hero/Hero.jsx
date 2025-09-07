import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
      <div className = "hero-text">
        <h1>VAMONOS PEST CONTROL</h1>
        <h1>Your Pest Problem Ends Here</h1>
        <p>From ants and roaches to rodents and termites, no pest is too stubborn for our expert team. We offer customized treatment plans, eco-friendly options, and guaranteed results to keep your home pest-free year-round.</p>
        <button className='btn dark-btn'>Explore More
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Hero