import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext.jsx'

// this navbar shows up on every single page because we put it above the Routes in App.jsx
function Navbar() {
  const { cartCount } = useContext(CartContext)

  return (
    <div id="navbar">
      <Link to="/" id="logo-link">ShopZone</Link>

      <div id="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/cart" id="cart-link">
          Cart ({cartCount})
        </Link>
      </div>
    </div>
  )
}

export default Navbar
