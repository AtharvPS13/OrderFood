import React, { useState } from 'react'
import './Canteen.css'
import MenuCard from '../../components/MenuCard/MenuCard';

const canteenList = [
  { image: '/logo.svg', name: 'Delhi Hut', price: 10 },
  { image: '/logo.svg', name: 'KFC', price: 0 },
  { image: '/logo.svg', name: 'Subway', price: 0 },
  { image: '/logo.svg', name: 'Food Court', price: 0 },
];

function Canteen() {

  return (
    <div className='canteen-page'>
      <div className='canteen-menu'>Canteens:</div>
      <div className='menu-cards'>
        {canteenList.map((canteen, index) => (
          <MenuCard key={index} item={canteen} />
        ))}
      </div>
    </div>
  )
}

export default Canteen