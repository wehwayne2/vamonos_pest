import React from 'react'
import "./Testimonials.scss"
import next_icon from "/icons/arrow_forward_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import back_icon from "/icons/arrow_back_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import hank from "/images/hank.webp"
import badger from "/images/badger.webp"
import marie from "/images/marie.webp"
import lydia from "/images/lydia.webp"


const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'/>
      <img src={back_icon} alt="" className='back-btn'/>
      <div className='slider'>
        <ul>
          <li></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonials