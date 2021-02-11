import React from 'react';
import './footer.component.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-about box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ex sunt natus unde eligendi
                        obcaecati minus sequi molestiae molestias quod? Qui fuga rem fugit exercitationem fugiat quia.
                        Illum, error reprehenderit?</p>
                    </div>
                </div>
                <div className="footer-links box">
                    <h2>Quick links</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Nursery</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Nursery</a></li>
                    </ul>
                </div>
                <div className="footer-contact box">
                    <h2>Contact us</h2>
                    <div className="content">
                        <form action="#">
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" name="" required />
                            </div>
                            <div className="msg">
                                <div className="text">Message *</div>
                                <textarea name="" id="" cols="25" rows="2" required></textarea>

                            </div>
                            <button type="submit" className="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}