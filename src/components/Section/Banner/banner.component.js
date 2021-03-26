import React from 'react';
import './banner.component.css';
import { Link } from 'react-router-dom';

export const Banner = () => {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h1>Decorate Your Home</h1>
                    <p>Flowers and plants bring so much beauty to every space they enter, big or small, inside or outside. But beyond aesthetic value, gardening can also be soothing and teach responsibility, while plants themselves purify the air and improve the vibes (seriously—even NASA says so). Given the benefits of gardening, it shouldn't be limited to wide open outdoor spaces and large greenhouses. So read through our creative small garden ideas anyone can try, including bringing the outdoors in if you have no yard or balcony to speak of. Get your green thumbs ready for window-box flowers, hanging plants, tiny veggie gardens, and more..</p>
                    <Link to="" className="btn">Explore Now &#8594;</Link>
                </div>
            </div>
        </>
    )
}