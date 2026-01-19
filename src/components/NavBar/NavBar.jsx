import { Link, NavLink } from 'react-router-dom'
import NavLogo from '../../../public/assets/img/NavLogo.png'
import NavCart from '../../../public/assets/img/NavCart.png'
import './NavBar.css'

//items = is json
const NavBar = (items, btn) => {
  return (
      <nav className="fs-navbar">
        <ul>
          {items.items.map((navItem, index) => (
            <li key={index}>
              <NavLink to={navItem.href} className={({ isActive }) => isActive ? "active" : ""}>
                {navItem.icon}
                {navItem.content}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to='/'><img src={NavLogo} alt="Logo" /></Link>
        
        <div className="fs-navcart">
          <Link to='/'><img src={NavCart} alt="Cart" /></Link>
          <button>{items.btn}</button>
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