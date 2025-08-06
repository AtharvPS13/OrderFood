import React, { useState } from 'react'
import './Canteen.css'
import MenuCard from '../../components/MenuCard/MenuCard';
import Slider from '../../components/Slider/Slider';


function Canteen() {

  return (
    <div className='canteen-page'>
      <div className='canteen-menu'>Canteens:</div>
        <Slider />
    </div>
  )
}

export default Canteen