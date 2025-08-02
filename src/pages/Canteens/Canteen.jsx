import React, { useState } from 'react'
import './Canteen.css'

function Canteen() {

  const [canteen,setCanteen] = useState("");

  const handleCanteen= (e) => {
    setCanteen(e.target.value)
  } 

  return (
    <div className='canteen-page'>
      <label>
        Select Canteen:
        <select className='canteen-list' onChange={handleCanteen}>
          <option value="1" >1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <div className='canteen-heading'>Welcome to {canteen} canteen!</div >
      <div className='canteen-menu'>Menu:</div>
    </div>
  )
}

export default Canteen