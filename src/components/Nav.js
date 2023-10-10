import React from 'react'
import logo from '../images/Logo .svg'
import { useState } from 'react';

const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }
  return (
    <nav className={`navbar ${mobileMenu ? 'open' : ""}`}>
        <a href='/' className='logo'>
            <img src={logo} alt='Little limon logo' />
        </a>
        {/* small devices */}

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        {/* NavLikns */}
        <ul className={`nav-links ${mobileMenu ? "visible" : ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/services'>Services</a>
            </li>
            <li>
                <a href='/menu'>Menu</a>
            </li>
            <li>
                <a href='/reservation'>Reservation</a>
            </li>
            <li>
                <a href='/online'>Order Online</a>
            </li>
            <li>
                <a href='/login'>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav