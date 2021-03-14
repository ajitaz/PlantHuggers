import React from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './indNursery.component.css';


export const IndNursery = () => {
    return (
        <>
            <NavBar isLoggedIn = {false}/>
            
            <div className="bgimg-1" style={{backgroundImage:'url("../images/surya_nursery.jpeg")'}}>
                <div className="caption">
                    <span className="border">Surya Home Nursery</span>
                </div>
            </div>

            <div className="cont">
                <h3>Surya Home Nursery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aliquid quasi nisi cupiditate odit repellendus veniam.
                Eaque voluptatibus suscipit nulla a ipsam repudiandae blanditiis cumque excepturi saepe optio.
                Corrupti reprehenderit in soluta. Temporibus, libero commodi iste labore magni, alias suscipit expedita facere sint cumque maiores quis rem sequi quisquam non fuga maxime autem consequatur quasi velit quam recusandae pariatur.
                tatum ad quae consectetur maxime, cumque nisi? Tempore, rerum?</p>
            </div>

            <div className="bgimg-2" style={{backgroundImage:'url("../images/surya_nursery.jpeg")'}}>
            </div>

            <div className="contact">
                <div>
                    <p>Contact</p>
                    <p> <i className="fas fa-phone-alt"></i> +977-9877777777</p>
                    <p> <i className="fas fa-map-marker-alt"></i> Biratnagar,Nepal</p>
                </div>
            </div>

            <div className="small-container">
                <div className="product-list">
                    <h2>available product</h2>
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
            <Footer />
        </>
    )
}