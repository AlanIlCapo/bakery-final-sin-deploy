import React from 'react';
import './Shop.css';
import Basket from '../assets/Images/Basket.png';


const Shop = () => {
    return(
        <div className='card'>
           <div className='card-image'> 
                <img src={Basket} alt="Basket" className='Basket'></img>
            </div>

            <div className='card-content'>
                <h2>Order Now To Home</h2>    
                <h2>Delivery</h2>
                <p>Our South London bakery makes award</p>
                <p>winning artisan gluten free sourdough</p>  
                <p>bread & bread mixes - all fresh to your door.</p>
                <button>SHOP NOW</button>

            </div>

        </div>
    )
}

export { Shop }