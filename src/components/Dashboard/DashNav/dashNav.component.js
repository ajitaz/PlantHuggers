import React from 'react';
import { Link } from 'react-router-dom';
import './dashNav.component.css';


export const DashNav = ()=>{
    
    function clearLocalStorage(){
        localStorage.clear();
    }

 return(
<header>
<div className="welcome">
    <p>{`Welcome,${localStorage.getItem('uid')}`}</p>
</div>
<div className="social-icons">
    <Link to="/login"><button onClick={()=>{clearLocalStorage()}} className="lbtn">Logout</button></Link>
    <Link to="/"><button className="sbtn">Home</button></Link>
</div>
</header>
 )
}
