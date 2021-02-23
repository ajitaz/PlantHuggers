import React from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import {Link} from 'react-router-dom';
import './shop.component.css';

export const Shop = () => {
    return (
        <>
            <NavBar />
            <div className="small-container">
            <h2 className="title">All Products</h2>
                <div className="product-list">
                    <h2>Indoor Plants</h2>
                    <div className="grid">
                        <div className="col-4">
                            <Link to="/products/product1"><img src="../images/plant2.jpg" alt="" /></Link>
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant2.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>

                    </div>
                    <button><Link to="/category/indoor">view more</Link></button>
                    <div className="clear"></div>
                </div>

                <div className="product-list">
                    <h2>Outdoor Plant</h2>
                    <div className="grid">
                        <div className="col-4">
                            <img src="../images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant2.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="../images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                    </div>
                    <button><a href="#">view more</a></button>
                    <div className="clear"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}