import React from 'react';
import './category.component.css';

export const Category = () => {
    return (
        <div>
        <h2 className="title">Categories</h2>
        <div className="categories">
            
            <div className="grid-view">
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/cactus.jpg" alt="" />
                </div>
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/cactus-grp.jpg" alt="" />
                </div>
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/plant.jpg" alt="" />
                </div>
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/plant1.jpg" alt="" />
                </div>
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/plant2.jpg" alt="" />
                </div>
                <div className="image">
                    <h1>Name</h1>
                    <img src="../images/plant.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
}