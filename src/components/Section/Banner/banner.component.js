import React from 'react';
import './banner.component.css';
import { Link } from 'react-router-dom';

export const Banner = () => {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h1>Decorate Your Home<br />Plant Today</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum earum dolorum, error quo, dolor
                    explicabo accusamus, porro doloremque corporis iste perspiciatis distinctio ratione ea id fuga ut?
                    Explicabo, qui voluptatibus.</p>
                    <Link to="" className="btn">Explore Now &#8594;</Link>
                </div>
            </div>
        </>
    )
}