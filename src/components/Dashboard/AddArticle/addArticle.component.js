import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addArticle.component.css';
import {DashNav } from '../DashNav/dashNav.component';



export const AddArticle = () => {

    return (
        <>
            <Sidebar />
            <div className="main-content">
              <DashNav />
                <main>
                    <h2 className="dash-title">Add Article</h2>

                    <div className="form">
                          <form method="POST" noValidate>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" placeholder="Title.." />
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" id="description" name="description"/>
                            <label htmlFor="img">Select image:</label>
                            <input type="file" id="img" name="img"/>
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                </main>

            </div>
        </>
    )
}