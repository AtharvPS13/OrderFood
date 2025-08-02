import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const handleClick= () =>{
    navigate('/canteen')
  }

  return (
    <div className='home-container'>
      <div className="bg-img"><img className = "bg-img-img"src='/pizza.jpg'/></div>
      <div className='title'>
        <h1>Don't Strave</h1>
        <h1>Just Order</h1>
        <div className='text'>
          Craving Food? <br></br> Reserve Your Meal Before You Even Arrive!
        </div>
        <button className='order-btn' onClick={handleClick}>
          Order Now !
        </button>
      </div>
    </div>
  )
}

export default Home