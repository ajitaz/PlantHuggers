import React from 'react';
import { Overview } from '../Overview/overview.component';
import './nurseryDashboard.component.css';


export const NurseryDashboard = () => {
    return (
        <>
            <div className="main-content">
                <Overview isNurseryDashboard={true} />
            </div>
        </>
    )
}
