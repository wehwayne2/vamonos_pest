import React from 'react'
import "./Navbar.scss"
import logo from '/icons/vamonos_pest.jpg'//go up twice

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar