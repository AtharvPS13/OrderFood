import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import Dropdown from '../Dropdown/Dropdown';


function Header() {
  return (
    <div className='header-container'>
      <div className='navbar'>
        <img className='logo-img' src='/logo.svg' alt='logo'/>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/canteen" className="nav-link">Canteen</NavLink>
      </div>
      <div className='images'>
        {/* user dropdonw /... */}
        <Dropdown />
        <img src="/cart.svg" alt='cart-img' className='cart-img'></img>
      </div>
    </div>
  )
}

export default Header