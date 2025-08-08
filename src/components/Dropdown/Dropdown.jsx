import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

function Dropdown() {
    const [isOpen,setIsOpen] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const dropdownRef = useRef(null);
    const profileBtnRef = useRef(null);

    const toggleDropdown=() => {
        setIsOpen(!isOpen)
        setShowLogin(false)
    }

    const openLogin= () =>{
        setIsOpen(false)
        setShowLogin(true)
    }
    const closeLogin = () => {
        setShowLogin(false);
        profileBtnRef.current?.focus();
    }

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

        {isOpen && (
        <div className={`user-dropdown-menu ${isOpen ? 'open' : ''}`}>
            <a href="*" className="user-dropdown-item">Profile</a>
            <a href="*" className="user-dropdown-item">Settings</a>
            <button onClick={openLogin} className="user-dropdown-item btn-link">
            Login
            </button>
            <a href="*" className="user-dropdown-item">Sign Out</a>
        </div>
        )
        }

        {/* Login box */}
     

        {showLogin && (
            <>
                <div className="login-overlay" onClick={closeLogin}></div>
                <div className='login-box'> 
                    <h3 className='login-heading'>Login</h3>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className="login-btn">Login</button>
                    <button className="close-btn" onClick={closeLogin}>
                        Close
                    </button>
                </div>
            </>
        )}
    </div>
  )
}

export default Dropdown