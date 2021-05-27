import React from 'react';
import { Link } from 'react-router-dom';
import './dashNav.component.css';


export const DashNav = () => {

    function clearLocalStorage() {
        localStorage.clear();
    }
    return (
        <header>
            <h3 className="brand"><span>Plant Huggers</span></h3>   
            <div className="social-icons">
            <p>{`Welcome,${localStorage.getItem('uname')}`}</p>
                <Link to={{
                    pathname: '/login',
                    search: '',
                    state: { fromRegister: false }
                }}>
                    <button onClick={() => { clearLocalStorage() }} className="lbtn">Logout</button>
                </Link>
                <Link to="/"><button className="sbtn">Home</button></Link>
            </div>
        </header>
    )
}
