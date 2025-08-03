import React, { useState } from 'react'
import './Canteen.css'
import MenuCard from '../../components/MenuCard/MenuCard';

const canteenList = [
  { image: '/logo.svg', name: 'Delhi Hut'},
  { image: '/logo.svg', name: 'KFC'},
  { image: '/logo.svg', name: 'Subway'},
  { image: '/logo.svg', name: 'Food Court'},
  { image: '/logo.svg', name: 'Cool Court'},
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