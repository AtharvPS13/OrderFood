import React, { useState } from 'react'
import './Canteen.css'
import MenuCard from '../../components/MenuCard/MenuCard';
const item1 = {
    image: '/logo.svg',
    name: 'Extra Samosa',
    price: 15.01,
  }

function Canteen() {

  return (
    <div className='canteen-page'>
      <div className='canteen-menu'>Canteens:</div>
      <div className='menu-cards'>
        <MenuCard item={item1}/>
        <MenuCard item={item1}/>
      </div>
    </div>
  )
}

export default Canteen