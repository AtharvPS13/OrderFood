import React from 'react'
import './MenuCard.css';
import PropTypes from 'prop-types';

const MenuCard = ({item}) => {
    return(
        <div className='menu-card'>
            <div className='plus-img-div'>
                <img src="/plus-icon.svg" alt='addOption' className='plus-img'/>
            </div>
            <img src={item.image} alt={item.name} className="menu-card-image" />
            <div className='menu-content'>
                <div className='menu-card-name'>{item.name}</div>
                <div className='menu-card-price'>Rs.{item.price}</div>
            </div>
        </div>
    )
}

MenuCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
}


export default MenuCard