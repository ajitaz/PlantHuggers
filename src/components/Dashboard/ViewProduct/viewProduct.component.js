import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import {DashNav} from '../DashNav/dashNav.component';
import './viewProduct.component.css';

export const viewProduct = ()=>{
    return(
        <>
          <Sidebar />
         <div className="main-content">
        <DashNav />
         <main>
            <h2 className="dash-title">Product-List</h2>
           <Link to ="/dashboard/addProduct"><button className="primary">Add Product</button></Link>
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Categories</th>
                            <th>tags</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Catcus</td>
                        <td><img src="../images/plant.jpg" alt="cactus"/></td>
                        <td>Indoor</td>
                        <td>cactus,indoor</td>
                        <td><span className=" badge success">Avialiable</span></td>
                        <td>
                        <button className="edit"><i className="fas fa-pencil-alt"> Edit</i></button>
                        <button className="delete"><i className="fas fa-trash-alt"> Delete</i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
          </main>
        </div>
        </>
    )
}