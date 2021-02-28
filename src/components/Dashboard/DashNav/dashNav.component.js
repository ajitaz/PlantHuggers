import React from 'react';
import { Link } from 'react-router-dom';
import './dashNav.component.css';


export const DashNav = ()=>{
 return(
<header>
<div className="welcome">
    <p>Welcome</p>
</div>
<div className="social-icons">
    <Link to="/login"><button className="lbtn">Logout</button></Link>
    <Link to="/"><button className="sbtn">Home</button></Link>
</div>
</header>
 )
}
