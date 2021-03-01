import React from 'react';
import { Link } from 'react-router-dom';
import './overview.component.css';

export const Overview = (props) => {

    let overview = props.isOverview
    ?
    <>
      <h2 className="dash-title">Overview</h2>
                <div className="dash-cards">
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                            <i className="fas fa-shopping-cart"></i>
                            <div>
                                <h5>Products</h5>
                                <h4>45,666</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                        <Link to="/nurseryDashboard/product">View All</Link>
                        </div>
                    </div>
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                            <i className="fas fa-plus-circle"></i>
                            <div>
                                <h5>Article</h5>
                                <h4>4</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                        <Link to="/nurseryDashboard/article">View All</Link>
                        </div>
                    </div>
                    <div className="Dcard-single">
                        <div className="Dcard-body">
                        <i className="fa fa-cart-arrow-down"></i>
                            <div>
                                <h5>Orders</h5>
                                <h4>25</h4>
                            </div>
                        </div>
                        <div className="Dcard-footer">
                        <Link to="/nurseryDashboard/order">View All</Link>
                        </div>
                    </div>
                </div>
    </>
    :
    <>
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
                         <Link to="/dashboard/user">View All</Link>
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
                        <Link to="/dashboard/viewProduct">View All</Link>
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
                        <Link to="/dashboard/ViewNursery">View All</Link>
                        </div>
                    </div>
                </div>
    </>
    return (
        <>
            <main>
               {overview} 
            </main>
        </>
    )
}