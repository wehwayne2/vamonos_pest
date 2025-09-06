import React from 'react'
import "./Services.scss"
import fumigation from "/images/Underground-Drug-Lab-777x437.webp"
import pestManagement from "/images/bad.webp"
import tenting from "/images/rk241j8gohq91.webp"

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={fumigation} alt="" />
        <div className='service-description'>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
          <h2>Whole-house fumigation</h2>
        </div>
      </div>
      <div className='service'>
        <img src={pestManagement} alt="" />
        <div className='service-description'>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bug-off-icon lucide-bug-off"><path d="M12 20v-8" /><path d="M14.12 3.88 16 2" /><path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" /><path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3" /><path d="m2 2 20 20" /><path d="M21 5a4 4 0 0 1-3.55 3.97" /><path d="M22 13h-3.34" /><path d="M3 21a4 4 0 0 1 3.81-4" /><path d="M6 13H2" /><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" /></svg>
          <h2>Integrated pest management (IPM)</h2>
        </div>
      </div>
      <div className='service'>
        <img src={tenting} alt="" />
        <div className='service-description'>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-heart-icon lucide-message-circle-heart"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" /></svg>
          <h2>Residential sealing and tenting</h2>
        </div>
      </div>
    </div>
  )
}

export default Services