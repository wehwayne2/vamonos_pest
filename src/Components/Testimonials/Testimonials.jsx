import React, { useEffect, useRef, useState } from 'react'
import "./Testimonials.scss"
import next_icon from "/icons/arrow_forward_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import back_icon from "/icons/arrow_back_24dp_FEF3C7_FILL0_wght400_GRAD0_opsz24.svg"
import hank from "/images/hank.webp"
import badger from "/images/badger.webp"
import marie from "/images/marie.webp"
import lydia from "/images/lydia.webp"


const Testimonials = () => {

  const testimonials = [
    {
      img: hank,
      name: 'Hank Schrader',
      role: 'DEA Agent, Albuquerque',
      review: 'I’ve seen a lot of shady operators in my line of work. Vamonos Pest isn\'t one of them — the\'re clean, professional, and efficient. Would recommend them to anyone.'
    },
    {
      img: lydia,
      name: 'Lydia Rodarte-Quayle',
      role: 'Corporate Client',
      review: 'My business requires absolute discretion. Vamonos Pest handled the situation flawlessly, and the entire process was invisible to outsiders.'
    },
    {
      img: badger,
      name: 'Badger(Brandon Mayhew)',
      role: 'Apartment Residents',
      review: 'Yo, man, we had this nasty roach thing going on, right? Vamonos hooked us up. Now the place is fresh. Five stars, no doubt!'
    },
    {
      img: marie,
      name: 'Marie Schrader',
      role: 'Residential Client',
      review: 'I can\'t stand creepy-crawlies. The Vamonos team showed up right on time, and after they were done, not a single bug in sight. Plus, they were so polite!'
    },
  ]

  const [tx, setTx] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(0)
  const slider = useRef();

  useEffect(() => {
    const resizer = () => {
      const childWidth = slider.current.firstElementChild.getBoundingClientRect().width
      const slidesPerPage = slider.current.clientWidth / childWidth
      setSlidesPerPage(Math.round(slidesPerPage))
      setSlideWidth(childWidth)
    }

    resizer()

    window.addEventListener('resize', resizer)
    return () => window.removeEventListener('resize', resizer)
  }, [])

  useEffect(() => {
    setTx(slideWidth * currentSlide)
  }, [currentSlide])

  return (
    <div className='testimonials'>
      <button 
        onClick={() => currentSlide < testimonials.length ? setCurrentSlide(prev => prev + 1) : null}
        className='next-btn'
        disabled={currentSlide >= testimonials.length - slidesPerPage}
        style={{opacity: currentSlide >= testimonials.length - slidesPerPage ? 0 : 1, cursor: 'default'}}
      >
        <img src={next_icon} alt=""/>
      </button>
      <button 
        onClick={() => currentSlide > 0 ? setCurrentSlide(prev => prev - 1) : null}
        className='back-btn'
        disabled={currentSlide === 0}
        style={{opacity: currentSlide === 0 ? 0 : 1, cursor: 'default'}}
      >
        <img src={back_icon} alt="" />
      </button>
      <div className='slider'>
        <ul ref={slider} style={{translate: -tx + 'px'}}>
          {testimonials.map(el => (
            <li key={el.name}>
              <div className='slide'>
                <div className='user-info'>
                  <img src={el.img} alt={el.name + '\'s photo'} />
                  <div>
                    <h3>{el.name}</h3>
                    <span>{el.role}</span>
                  </div>
                </div>
                <p>
                  {el.review}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Testimonials