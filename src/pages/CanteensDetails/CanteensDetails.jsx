import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './CanteensDetails.css'

function CanteensDetails() {
    const { canteenName } = useParams();
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen=() => setIsOpen(!isOpen)

  return (
    <div>
        <h2>Welcome to {canteenName}</h2>
        <button onClick={toggleOpen} className={isOpen ? 'opened' :'closed'}>OPEN</button>
        <button onClick={toggleOpen} className={isOpen ? 'closed' :'opened'}>CLOSE</button>
    </div>
  )
}

export default CanteensDetails