
import React from 'react';
import logo from './assets/Logo (1).png'
import Nav from './Nav.jsx'
function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;
