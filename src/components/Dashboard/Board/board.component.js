import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { DashNav } from '../DashNav/dashNav.component';
import './board.component.css';

export class Dashboard extends Component {
    constructor() {
        super();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Sidebar isNursery={false} />
                <div className="main-content">
                    <DashNav />
                    <Overview />
                </div>
            </>
        )
    }
}
