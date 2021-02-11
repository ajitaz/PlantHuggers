import React from 'react';
import './newArrival.component.css';

export const NewArrival = () => {
    return (
        <div className="featured">
            <h2 className="title">New Arrivals</h2>
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src="../images/plant2.jpg" alt="" />
                    </div>
                    <div className="col-3">
                        <img src="../images/plant2.jpg" alt="" />
                    </div>
                    <div className="col-3">
                        <img src="../images/plant2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}