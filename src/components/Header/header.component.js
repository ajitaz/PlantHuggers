import React from 'react';
import './header.component.css';
import { NavBar } from '../common/navbar/nav.component';
import { Banner } from '../Banner/banner.component';

export const Header = () => {
    return(
        <div className="nav-container" style ={{backgroundImage: "url(/images/cactus-grp.jpg)"}} >
            <NavBar/>
            <Banner/>
        </div>
    )
}