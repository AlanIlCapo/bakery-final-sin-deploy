import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-row">

                <div className="footer-links">
                    <h4 className="footer-title">Social media</h4>
                    <ul className="footer-ul">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4 className="footer-title">Delivery</h4>
                    <ul className="footer-ul">
                        <li><a href="#">Uber</a></li>
                        <li><a href="#">Rappi</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4 className="footer-title">Information</h4>
                    <ul className="footer-ul">
                        <li><a href='./About'>About</a></li>
                        <li><a href='./Menu'>Menu</a></li>
                        <li><a href='./Shop'>Shop</a></li>
                        <li><a href='./Contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4 className="footer-title">Phone</h4>
                    <ul className="footer-ul">
                        <li><a href='#'>54-9-2324-222222</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export { Footer }