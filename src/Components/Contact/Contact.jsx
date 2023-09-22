import React from 'react';
import Coffeshop from '../assets/Images/Coffeshop.png';
import './Contact.css';

const Contact = () => {
    return(
        <div className='contact'>
            <div className='contact-text'>
                <h2>Visit us at</h2>
                <p>68 - 170 Clapton common</p>
                <p>London E5 9AG</p>
                <hr></hr>
                <p>91 Dunsmure Road</p>
                <p>London N16 5HT</p>
            </div>
            <img className='image-contact' src={Coffeshop} alt='Image of our shop'/>

        </div>
    )
}

export { Contact }