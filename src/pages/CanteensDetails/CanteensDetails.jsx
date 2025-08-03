import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import './CanteensDetails.css'

function CanteensDetails() {
    const { canteenName } = useParams();
    const [isOpen,setIsOpen] = useState(false)
    const navigate = useNavigate();

    const toggleOpen=() => setIsOpen(!isOpen)

  return (
    <div className='canteendetails-page'>
        <img 
        src="/prevArrow.svg" 
        alt='backarrow' 
        className='back-arrow' 
        onClick={() => navigate(-1)} 
        />
        <h2>Welcome to {canteenName}!!</h2>
        <div className='open-close'>
          <button onClick={toggleOpen} className={isOpen ? 'opened' :'closed'}>OPEN</button>
          <button onClick={toggleOpen} className={isOpen ? 'closed' :'opened'}>CLOSE</button>
        </div>
        <div className='menu-lists'>
          MENU:
        </div>
    </div>
  )
}

export default CanteensDetails