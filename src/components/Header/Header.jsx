import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';


function Header() {
  return (
    <div className='navbar'>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/canteen" className="nav-link">Canteen</NavLink>
      <img src={user} alt='user-img' className='user-img'></img>
      <img src={cart} alt='cart-img' className='cart-img'></img>
    </div>
  )
}

export default Header