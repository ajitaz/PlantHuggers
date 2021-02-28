import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import {DashNav} from '../DashNav/dashNav.component';
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
                    <DashNav />
                    <Overview />
                </div>
            </>
        )
    }
}
