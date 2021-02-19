import React from 'react';
import './overview.component.css';

export const Overview = () => {
    return (
        <>
            <main>
                <h2 className="dash-title">Overview</h2>
                <div className="dash-cards">
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                            <i className="fas fa-home"></i>
                            <div>
                                <h5>Users</h5>
                                <h4>27</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                            <a href="user.html">View All</a>
                        </div>
                    </div>
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                            <i className="fas fa-shopping-cart"></i>
                            <div>
                                <h5>Products</h5>
                                <h4>45,666</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                            <a href="product.html">View All</a>
                        </div>
                    </div>
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                            <i className="fas fa-hand-holding-seedling"></i>
                            <div>
                                <h5>Nursery</h5>
                                <h4>13</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                            <a href="nursery.html">View All</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}