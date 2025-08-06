import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import './Slider.css'
import MenuCard from '../MenuCard/MenuCard'

function Slider() {

    const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4])

    const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
        );

        return updatedIndexes;
        });
    };

    const canteenList = [
    { name: "Coming Soon", image: "/cooming_soon.jpg" },
    { name: "Cart", image: "/cart.svg" },
    { name: "Pizza", image: "/pizza.jpg" },
    { name: "Another Cart", image: "/cart.svg" },
    { name: "Yet Another Cart", image: "/logo.svg" },
    ];

    const positions = [
        'center',
        'left1',
        'left',
        'right1',
        'right',
    ]
    const imageVariant = {
        center: { x: "0%", scale: 1, zIndex: 5 },    
        left1: { x: "-70%", scale: 0.7, zIndex: 3 ,opacity:"75%"},
        left: { x: "-120%", scale: 0.5, zIndex: 2,opacity:"50%" },
        right: { x: "70%", scale: 0.7, zIndex: 3 ,opacity:"75%"},
        right1: { x: "120%", scale: 0.5, zIndex: 2,opacity:"50%" },
    };


  return (
    <div className='slider-page'>
        {canteenList.map((canteen, index) => (
            <motion.div
                key={index}
                className="slider-card"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariant}
                transition={{ duration: 0.5 }}
                style={{
                    width: '300px',           
                    position: 'absolute',   
                    // height:'500px'    
                }}
            >
                <MenuCard item={canteen} className="menu-cards"/>
            </motion.div>
        ))} 

        <div className='arrows'>
            <img src="/prevArrow.svg" alt='prevArrow' className='next-arrow' onClick={handleBack}/>
            <img src="/nextArrow.svg" alt='nextArrow' className='prev-arrow' onClick={handleNext}/>
        </div>

    </div>
  )
}

export default Slider