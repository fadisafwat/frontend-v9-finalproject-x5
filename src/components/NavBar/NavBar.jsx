import React, { useEffect, useRef, useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import NavLogo from '../../../public/assets/img/NavLogo.png'
import NavCart from '../../../public/assets/img/NavCart.png'
import styles from './NavBar.module.css'

//items = is json
const NavBar = (items, btn) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu on Escape or click outside
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false)
    }
    function onClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("click", onClick)
    }
  }, [])

  const handleToggle = (e) => {
    e.stopPropagation()
    setMenuOpen((s) => !s)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }
  return (
      <nav className={styles.fsNavbar} ref={menuRef}>
        <ul id="primary-navigation" 
            className={`${styles.fsNavLinks} ${menuOpen ? styles.active : ""}`}
            role="menu"
        >
          {items.items.map((navItem, index) => (
            <li role="none" key={index}>
              <NavLink to={navItem.href} className={({ isActive }) => isActive ? styles.fsActiveLink : ""} onClick={handleLinkClick} role="menuitem">
                {navItem.icon}
                {navItem.content}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <Link to='/'><img src={NavLogo} alt="Logo" /></Link>
        
        <div className={styles.fsNavcart}>
          <Link to='/'><img src={NavCart} alt="Cart" /></Link>
          <button className={styles.Supportbutton}>{items.btn}</button>
          <button
            className={styles.fsMenuBtn}
            onClick={handleToggle}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={styles.fsHamburger} aria-hidden="true">
              {menuOpen ? (
                // X icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                // Hamburger
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </nav>
  )
}

export default NavBar


//use List Rendering with for nav items.
//<li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
//<li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>

/*put icon inside nav item:
use font-awesome cdn -> put the link in index.html head section & javascript.
use vpn to search for icons.
<li><NavLink><i className={items.icon}></i> Home</NavLink></li>
npm i font-awesome ==> there is a better package called react-icons have font-awesom and more
https://react-icons.github.io/react-icons/


*/