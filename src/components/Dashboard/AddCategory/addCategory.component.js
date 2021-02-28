import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addCategory.component.css';
import { Link } from 'react-router-dom';


export const addCategory = () => {

    return (
        <>
            <Sidebar />
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
                <main>
                    <h2 className="dash-title">Add Category</h2>

                    <div className="form">
                        <form method="POST" noValidate encType="multipart/form-data">
                            <label htmlFor="cname">Category Name</label>
                            <input type="text" id="cname" name="cname" placeholder="Category Name.." />
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" id="description" name="description"/>
                            <label htmlFor="img">Select image:</label>
                            <input type="file" id="img" name="img"/>
                        </form>
                    </div>
                </main>

            </div>
        </>
    )
}
       
    

