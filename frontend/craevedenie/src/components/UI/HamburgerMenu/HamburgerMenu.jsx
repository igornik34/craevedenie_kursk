import React from 'react'
import './HamburgerMenu.css'

function HamburgerMenu({toggleMenu, isOpen}) {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default HamburgerMenu