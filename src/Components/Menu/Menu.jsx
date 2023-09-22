import React from 'react';
import bread from '../assets/Images/Bread_Octo.png';
import bagel from '../assets/Images/Bagels_Octo.png';
import cake from '../assets/Images/Cake_Octo.png';
import './Menu.css';

const Menu = () => {
    return(
        <div className='menu'>
            <img src={bread} alt="Bread" className='bread'></img>
            <img src={bagel} alt="Bagel" className='bagel'></img>
            <img src={cake} alt="Cake" className='cake'></img>
        </div>

        
    )
}

export { Menu }