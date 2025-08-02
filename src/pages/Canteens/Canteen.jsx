import React from 'react'
import './Canteen.css'

function Canteen() {
  return (
    <div className='canteen-page'>
      <label>
        Select Canteen:
        <select className='canteen-list'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      
    </div>
  )
}

export default Canteen