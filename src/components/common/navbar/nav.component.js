import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css'


export const NavBar = (props) => {
    let userLogged = props.isLoggedIn
        ? <ul>
            <li><Link to=""><i className="fas fa-shopping-cart"></i></Link></li>
            <li><Link to=""><i className="fas fa-user"></i></Link></li>
        </ul>
        : <ul>
            <li><Link to="" className="login-btn show-btn" id="show">Login</Link></li>
        </ul>

        
    return (
        <div className="navbar">
            <div className="logo">
                <img src="images/planthuggers.png" alt="Logo" width="80"></img>
            </div>
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Shop</Link></li>
                    <li><Link to="">Nursery</Link></li>
                    <li><Link to="">Articles</Link></li>
                </ul>
            </nav>
            <div className="nav-details">
               {userLogged}
            </div>
        </div>
    )
}