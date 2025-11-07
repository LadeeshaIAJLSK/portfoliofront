import React from 'react'
import './Navbar.css'

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact me' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-name">LADEESHA</span>
      </div>
      
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar