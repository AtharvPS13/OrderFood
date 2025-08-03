import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const handleClick= () =>{
    navigate('/canteen')
  }

  const knowMoreClick= () =>{
    navigate('/about')
  }

  return (
    <div className='home-container'>
      <div className='title'>
        <h1>CAMPUS CRAVINGS</h1>
        <div className='text'>
          Orders taking too long? <br></br> Clock in your Cravings, Reserve your Meal!
        </div>
        <div className = 'home-page-buttons'>
        <button className='order-btn' onClick={handleClick}>
          Order Now
        </button>
        <button className='know-more-btn' onClick={knowMoreClick}>
          Know More
        </button>
        </div>
      </div>
      <img src="../../public/white_pizza.png" className = "bg-img" alt="pizza" />
    </div>
  )
}

export default Home