import React from 'react';
import './header.component.css';
import { Banner } from '../Banner/banner.component';

export const Header = () => {
    return(
        <div className="nav-container" style ={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(/images/garden-party-chairs-s2.jpg)"}} >
            <Banner/>
        </div>
    )
}