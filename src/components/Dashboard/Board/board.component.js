import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
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
                            <p>Welcome</p>
                        </div>
                        <div className="social-icons">
                            <Link to="/login"><button className="lbtn">Logout</button></Link>
                            <Link to="/"><button className="sbtn">Home</button></Link>
                        </div>
                    </header>
                    <Overview />

                </div>
            </>
        )
    }
}
