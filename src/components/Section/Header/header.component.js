import React from 'react';
import './header.component.css';
import { Banner } from '../../Banner/banner.component';

export const Header = () => {
    return(
        <div className="nav-container" style ={{backgroundImage: "url(/images/cactus-grp.jpg)"}} >
            <Banner/>
        </div>
    )
}