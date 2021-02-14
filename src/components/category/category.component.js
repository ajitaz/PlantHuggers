import React from 'react';
import './category.component.css';

export const Category = () => {
    return (
        <>
            <h2 className="title">Categories</h2>
            <div className="categories">
                <div className="grid-view">
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/cactus.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Indoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/cactus.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Indoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Indoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/plant1.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Indoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/plant2.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>kitchen Gardening <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <h1>Name</h1>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h2>Outdoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}