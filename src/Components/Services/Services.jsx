import React from 'react'
import "./Services.scss"
import fumigation from "/images/Underground-Drug-Lab-777x437.webp"
import pestManagement from "/images/bad.webp"
import tenting from "/images/rk241j8gohq91.webp"
import greenSolution from '/images/breaking-bad-hazard-pay-1.webp'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={fumigation} alt="" />
        <div className='service-description'>
          <h2>Whole-house fumigation</h2>
          <p>A comprehensive treatment method used to eliminate pests such as termites, bedbugs, or cockroaches from an entire property. The home is sealed and filled with a controlled fumigant gas that penetrates walls, furniture, and hidden spaces to ensure complete eradication of infestations, leaving no hiding places behind.</p>
        </div>
      </div>
      <div className='service'>
        <img src={pestManagement} alt="" />
        <div className='service-description'>
          <h2>Integrated pest management (IPM)</h2>
          <p>A sustainable, science-based approach that combines inspection, monitoring, prevention, and targeted treatment. Instead of relying solely on chemicals, IPM uses a blend of biological, mechanical, and minimal chemical solutions to control pests effectively while reducing risks to people, pets, and the environment.</p>
        </div>
      </div>
      <div className='service'>
        <img src={tenting} alt="" />
        <div className='service-description'>
          <h2> Residential sealing and tenting</h2>
          <p>This service focuses on physically protecting the home from pests by identifying and sealing entry points, then tenting the property for thorough treatment when necessary. Tenting creates a controlled environment for fumigation or other pest-control procedures, ensuring pests are addressed from the foundation to the roofline.</p>
        </div>
      </div>
      <div className='service'>
        <img src={greenSolution} alt="" />
        <div className='service-description'>
          <h2>Environmentally friendly extermination solutions</h2>
          <p>Designed for eco-conscious homeowners, these methods use low-toxicity or natural treatments that target pests while minimizing impact on the environment. Examples include botanical-based sprays, heat treatments, and eco-certified products that are safe for children, pets, and sensitive ecosystems.</p>
        </div>
      </div>      
    </div>
  )
}

export default Services