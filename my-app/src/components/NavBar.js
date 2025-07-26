import React from 'react'
import propTypes from 'prop-types'
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
    <div className="logo">MySite</div>
    <ul className="nav-links" id="navLinks">
      <li><a href="/">{props.firstTitle}</a></li>
      <li><a href="/">{props.secondTitle}</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
    <div className="menu-toggle" onClick={toggleMenu}>☰</div>
  </nav>
    </div>
  )
}
NavBar.propTypes={firstTitle:propTypes.string,secondTitle:propTypes.string}
