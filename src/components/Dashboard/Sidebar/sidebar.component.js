import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.component.css';

export class Sidebar extends Component {

    render() {
        return (
            <>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h3 className="brand"><span>Plant Huggers</span></h3>
                    </div>
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
                                <Link to="/dashboard/nursery"><i className="fas fa-hand-holding-seedling"></i><span>Nursery</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/setting"><i className="fas fa-cog"></i><span>Setting</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}