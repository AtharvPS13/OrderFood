import React from 'react'
import './MenuCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuCard = ({item}) => {

    const routeName = item.name.toLowerCase().replace(/\s+/g, '');

    return(
        <Link to={`/canteen/${routeName}`} className="menu-card-link">
            <div className='menu-card'>
                <img src={item.image} alt={item.name} className="menu-card-image" />
                <div className='menu-content'>
                    <div className='menu-card-name'>{item.name}</div>
                </div>
            </div>
        </Link>    
    )
}

MenuCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired
}


export default MenuCard