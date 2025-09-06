import React from 'react'
import "./Navbar.scss"
import logo from '/icons/vamonos_pest.png'//go up twice

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar