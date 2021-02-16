import React from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './products.component.css';

export const Products = () => {
    return (
        <>
            <NavBar isLoggedIn={false}></NavBar>
            <div className="small-container single-product">
                <div className="head">
                    <div className="col-2 image">
                        <img src="../images/cactus.jpg" height="500" />
                    </div>

                    <div className="col-2 details">
                        <p>Indoor Plant</p>
                        <h1>Cactus</h1>
                        <h4>Rs 1200</h4>
                        {/* <input type="number" value="1" /> */}
                        <button><a href="">Add to Cart </a></button>
                        <h3>product Detail <i className="fas fa-info-circle"></i></h3>
                        <p>
                            A cactus is a member of the plant family Cactaceae, a family
                            comprising about 127 genera with some 1750 known species of the
                            order Caryophyllales. The word "cactus" derives, through Latin, from
                            the Ancient Greek κάκτος, kaktos, a name originally used by
                            Theophrastus for a spiny plant whose identity is now not certain.
                        </p>
                    </div>
                </div>



                <div className="small-container">
                    <div className="product-list">
                        <h2>Related Products</h2>
                        <div className="row grid">
                            <div className="col-4">
                                <img src="/images/plant1.jpg" alt="" />
                                <h4>Plant Indoor</h4>
                                <p>Rs.1800</p>
                            </div>
                            <div className="col-4">
                                <img src="/images/plant2.jpg" alt="" />
                                <h4>Plant Indoor</h4>
                                <p>Rs.1800</p>
                            </div>
                            <div className="col-4">
                                <img src="/images/plant1.jpg" alt="" />
                                <h4>Plant Indoor</h4>
                                <p>Rs.1800</p>
                            </div>
                            <div className="col-4">
                                <img src="/images/plant1.jpg" alt="" />
                                <h4>Plant Indoor</h4>
                                <p>Rs.1800</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>

    )
}