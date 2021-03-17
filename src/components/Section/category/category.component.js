import React from 'react';
import { Link } from 'react-router-dom';
import './category.component.css';

export const Category = () => {
    return (
        <>
            <h2 className="title">Categories</h2>
            <div className="Categories">
                <div className="grid-view">
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/cactus.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>Indoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.
                                
                                </p>
                                <Link to="/category/indoor"> <button>view more</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/cactus.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>Outdoor plants <i className="fas fa-info-circle"></i></h2>
                                <p>  consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Ccccccc quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.
                                </p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>Water plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/plant1.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>Rock plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/plant2.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>kitchen Gardening <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="Cimage">
                        <h1>Name</h1>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="Coverlay">
                            <div className="Coverlay-content">
                                <h2>Outdoor plants <i className="fas fa-info-circle"></i></h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi? Cupiditate eum delectus accusamus quis.</p>
                                <a href="#"> <button>view more</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}