import React, { Component } from 'react';
import { Dashboard } from '../Board/board.component';
import './sidebar.component.css';

export class Sidebar extends Component {

    render() {
        return (
            <>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h3 className="brand"><span>Plant Huggers</span></h3>
                        <i className="far fa-bars"></i>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="admin.html"><i className="fas fa-home"></i><span>Dashboard</span>
                            </a>
                            </li>
                            <li>   
                            <a href="user.html"><i className="fas fa-user"></i><span>User</span>
                            </a>
                            </li>
                            <li>
                                <a href="product.html"><i className="fas fa-shopping-cart"></i><span>Product</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i className="fas fa-hand-holding-seedling"></i><span>Nursery</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i className="fas fa-cog"></i><span>Setting</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}