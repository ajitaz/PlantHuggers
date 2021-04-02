import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
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
                <div className="main-content">
                    <DashNav />
                    <Overview />
                </div>
            </>
        )
    }
}
