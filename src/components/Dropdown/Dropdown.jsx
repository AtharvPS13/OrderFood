import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

function Dropdown() {
    const [isOpen,setIsOpen] = useState(false)
    const dropdownRef = useRef(null);

    const toggleDropdown=() => setIsOpen(!isOpen)

    useEffect(()=> {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown',handleClickOutside)
        return() =>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    },[])

  return (
    <div ref={dropdownRef} className="dropdown-container">
        <div 
        onClick={toggleDropdown}
        className="user-dropdown-btn"
        >
            <img src="/user.svg" alt='user-profile' className='user-icon'/>
        </div>

        <div className={`user-dropdown-menu ${isOpen ? 'open' : ''}`}>
            {['Profile', 'Settings', 'Sign Out'].map((item, index) => (
            <a 
                href="*" 
                className="user-dropdown-item" 
                key={item}
            >
                {item}
            </a>
            ))}
        </div>
    </div>
  )
}

export default Dropdown