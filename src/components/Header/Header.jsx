import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/canteen">Canteen</NavLink>
    </>
  )
}

export default Header