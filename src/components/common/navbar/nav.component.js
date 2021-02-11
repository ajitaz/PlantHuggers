import React from 'react';
import './nav.component.css'


export const NavBar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="images/planthuggers.png" alt="Logo" width="80"></img>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Nursery</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>
            </nav>
            <div className="nav-details">
                <ul>
                    <li><a href=""><i className="fas fa-shopping-cart"></i></a></li>
                    <li><a href=""><i className="fas fa-user"></i></a></li>
                </ul>
            </div>
        </div>
    )
}