import React from 'react';
import { Link } from 'react-router-dom';
import { DashNav } from '../DashNav/dashNav.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import './setting.component.css';

export const setting = () => {
    return (
        <>
         <div className="main-content">
        <DashNav />
        <Sidebar />
            <main>
                <h2 className="dash-title">Setting</h2>
            <div className="setting-div">
            <Link to="/dashboard/AddArticle"><button className="primary"><i class="fa fa-plus-circle"></i> Add Article</button></Link>
            <Link to="/dashboard/addCategory"><button className="primary"><i class="fa fa-plus-circle"></i> Add category</button></Link>
            </div>
                
            </main>
            </div>
        </>
    )
}