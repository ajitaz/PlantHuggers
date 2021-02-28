import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar/sidebar.component';
import './setting.component.css';

export const setting = () => {
    return (
        <>
         <div className="main-content">
                     <header>
                        <div className="welcome">
                            <p>Welcome, Ramesh</p>
                        </div>
                        <div className="social-icons">
                            <Link to="/login"><button className="lbtn">Logout</button></Link>
                            <Link to="/"><button className="sbtn">Home</button></Link>
                        </div>
                    </header>
        <Sidebar />
            <main>
                <h2 className="dash-title">Setting</h2>
            <div className="setting-div">
            <Link to="/dashboard/addArticle"><button className="primary"><i class="fa fa-plus-circle"></i> Add Article</button></Link>
            <Link to="/dashboard/addCategory"><button className="primary"><i class="fa fa-plus-circle"></i> Add category</button></Link>
            </div>
                
            </main>
            </div>
        </>
    )
}