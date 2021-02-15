import React from 'react';
import './partnerNursery.component.css';

export const Nursery = () => {
    return (
        <>
            <h2 className="title">Partner Nursery</h2>
            <div className="categories">
                <div className="grid-view">
                    <div className="image">
                        <img src="/images/cactus.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Manakamana Youth Nursery</h2>
                                <p><i className="fas fa-map-marker-alt"></i> manakamana</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-986450045</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/plant.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Black fort Nursery</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Biratnagar</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-988744545</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/plant1.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>White forest Nepal</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Kathmandu</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-986454545</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/cactus-grp.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Buddha fire Nursery</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Boudha,Kathmandu</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-986454545</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/plant.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Jungle Power Nursery</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Birtamode,Jhapa</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-986454545</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/plant1.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Jungle Power Nursery</h2>
                                <p><i className="fas fa-map-marker-alt"></i> Birtamode,Jhapa</p>
                                <p><i className="fas fa-mobile-alt"></i> +977-986454545</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}