import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='bg-image'>
      <div className='title'>
        <h1>Don't Strave</h1>
        <h1>Just Order</h1>
        <div className='text'>
          Craving Food? <br></br> Reserve Your Meal Before You Even Arrive!
        </div>
        <button className='order-btn'>
          Order Now !
        </button>
      </div>
    </div>
  )
}

export default Home