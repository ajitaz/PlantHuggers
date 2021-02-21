import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { User } from '../User/user.component';
import './board.component.css';

export class Dashboard extends Component {
    constructor() {
        super();
        }
    

    render() {
      
        return (
            <>
                <Sidebar />
                <div className="main-content">
                    <header>
                        <div className="welcome">
                            <p>Welcome, Ramesh</p>
                        </div>
                        <div className="social-icons">
                            <i className="fas fa-sign-out-alt"></i><span>Logout</span>
                        </div>
                    </header>
                    <Overview />

                </div>
            </>
        )
    }
}
