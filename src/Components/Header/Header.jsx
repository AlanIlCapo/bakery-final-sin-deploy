import React from 'react';
import './Header.css';
import logo from '../assets/Images/Logo.jpeg'

const Header = () => {
    return(
        <header>

            <nav id='menu'>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#News">News</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <img src={logo} alt="" className="logo"/>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Sale">Sale</a></li>
                    <li><a href="#Shop">Shop</a></li>


                </ul>

            </nav>

        </header>
    )
}

export { Header }