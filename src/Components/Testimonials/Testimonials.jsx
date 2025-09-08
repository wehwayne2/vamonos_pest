import React, { useRef } from 'react'
import "./Testimonials.scss"
import next_icon from "/icons/arrow_forward_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import back_icon from "/icons/arrow_back_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import hank from "/images/hank.webp"
import badger from "/images/badger.webp"
import marie from "/images/marie.webp"
import lydia from "/images/lydia.webp"


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const backBtn = useRef();
  const fortBtn = useRef();



const slideForward = () => {
  if (tx > -75) {
    tx -= 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  if (tx === 0) {
    backBtn.current.style.opacity = "0";
  } else {
    backBtn.current.style.opacity = "1";
  }

  if (tx === -75) {
    fortBtn.current.style.opacity = "0";
  } else {
    fortBtn.current.style.opacity = "1";
  }
};


const slideBackward = () => {
  if (tx < 0) {
    tx += 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  if (tx === 0) {
    backBtn.current.style.opacity = "0";
  } else {
    backBtn.current.style.opacity = "1";
  }

  if (tx === -75) {
    fortBtn.current.style.opacity = "0";
  } else {
    fortBtn.current.style.opacity = "1";
  }
};

  return (
    <div className='testimonials'>
      <img ref={fortBtn} src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img ref={backBtn} src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={hank} alt="" />
                <div>
                  <h3>Hank Schrader</h3>
                  <span>DEA Agent, Albuquerque</span>
                </div>
              </div>
              <p>
                I’ve seen a lot of shady operators in my line of work. Vamonos Pest isn’t one of them — they’re clean, professional, and efficient. Would recommend them to anyone.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={lydia} alt="" />
                <div>
                  <h3>Lydia Rodarte-Quayle</h3>
                  <span>Corporate Client</span>
                </div>
              </div>
              <p>
                My business requires absolute discretion. Vamonos Pest handled the situation flawlessly, and the entire process was invisible to outsiders.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={badger} alt="" />
                <div>
                  <h3>Badger(Brandon Mayhew)</h3>
                  <span>Apartment Residents</span>
                </div>
              </div>
              <p>
                Yo, man, we had this nasty roach thing going on, right? Vamonos hooked us up. Now the place is fresh. Five stars, no doubt!
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={marie} alt="" />
                <div>
                  <h3>Marie Schrader</h3>
                  <span>Residential Client</span>
                </div>
              </div>
              <p>
               I can’t stand creepy-crawlies. The Vamonos team showed up right on time, and after they were done, not a single bug in sight. Plus, they were so polite!
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials