import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addCategory.component.css';
import { DashNav } from '../DashNav/dashNav.component';


export const addCategory = () => {

    return (
        <>
            <Sidebar />
            <div className="main-content">
              <DashNav />
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
       
    

