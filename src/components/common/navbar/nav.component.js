import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css'

// window.addEventListener("scroll",()=>{
//     var navBar = document.querySelector(".navbar");
//     navBar.classList.toggle("sticky",window.scrollY > 0);
//   })

export const NavBar = (props) => {
    let userLogged = props.isLoggedIn
        ? <ul>
            <li><Link to=""><i className="fas fa-shopping-cart"></i></Link></li>
            <li><Link to=""><i className="fas fa-user"></i></Link></li>
        </ul>
        : <ul>
            <li><Link to="" className="login-btn">Login</Link></li>
        </ul>

        
    return (
        <div className="navbar">
            <div className="logo">
                <img src="images/planthuggers.png" alt="Logo" width="80"></img>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/nursery">Nursery</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
            <div className="nav-details">
               {userLogged}
            </div>
        </div>
    )
}