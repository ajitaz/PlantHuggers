import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css';

export const NavBar = (props) => {
    let userLogged = props.isLoggedIn
        ? <ul>
            <li><Link to=""><i className="fas fa-shopping-cart"></i></Link></li>
            <li><Link to=""><i className="fas fa-user"></i></Link></li>
        </ul>
        : <ul>
            <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>

        
    return (
        <div className="navbar">
            <div className="logo">
                <img src="http://localhost:3000/images/planthuggers.png" alt="Logo" width="80"></img>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/nursery">Nursery</Link></li>
                    <li><Link to="/category/indoor">Category</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
            <div className="nav-details">
               {userLogged}
            </div>
        </div>
    )
}