import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.component.css';

export const Sidebar = (props) => {
    let Admin = props.isNurseryAdmin
        ? <>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="/nurseryDashboard"><i className="fas fa-home"></i><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/product"><i className="fas fa-shopping-cart"></i><span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/order"><i className="fa fa-cart-arrow-down"></i><span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/article"><i className="fas fa-plus-circle"></i><span>Article</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
        : <>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="/dashboard"><i className="fas fa-home"></i><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/user"><i className="fas fa-user"></i><span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/viewProduct"><i className="fas fa-shopping-cart"></i><span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/viewNursery"><i className="fas fa-hand-holding-seedling"></i><span>Nursery</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/setting"><i className="fas fa-cog"></i><span>Setting</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/order"><i className="fa fa-cart-arrow-down"></i><span>Order</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>


    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className="brand"><span>Plant Huggers</span></h3>
            </div>
            {Admin}

        </div>
    )
}