import React, { useEffect, useState, useRef } from 'react'
import "./Navbar.scss"
import logo from '/icons/vamonos_pest.png'//go up twice
import { Link } from 'react-scroll'
import menu_icon from "/icons/menu_24dp_FFF100_FILL0_wght400_GRAD0_opsz24.svg"

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  //mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  let menuRef = useRef();
  const menuIconRef = useRef(); 

useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside both menu AND menu icon
      if (menuRef.current && 
          !menuRef.current.contains(e.target) && 
          menuIconRef.current && 
          !menuIconRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Add dependency array

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Simplified toggle
  };

  /*   const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    } */

  return (
    <nav className={`${sticky ? "navbar" : ""}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul ref={menuRef} className={mobileMenu ? "" : 'hide-menu'}>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
          <Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bug-off-icon lucide-bug-off"><path d="M12 20v-8" /><path d="M14.12 3.88 16 2" /><path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" /><path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3" /><path d="m2 2 20 20" /><path d="M21 5a4 4 0 0 1-3.55 3.97" /><path d="M22 13h-3.34" /><path d="M3 21a4 4 0 0 1 3.81-4" /><path d="M6 13H2" /><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" /></svg>
          <Link to="services" smooth={true} duration={500} offset={-300}>Services</Link></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
          <Link to="about" smooth={true} duration={500} offset={-200}>About us</Link></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-heart-icon lucide-message-circle-heart"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" /></svg>
          <Link to="testimonials" smooth={true} duration={500} offset={-300}>Testimonials</Link></li>
        <li>
          <Link className='btn' to="contact" smooth={true} duration={500} offset={0}>Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} ref={menuIconRef} />
    </nav>
  )
}

export default Navbar