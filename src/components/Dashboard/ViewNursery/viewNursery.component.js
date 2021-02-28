import React from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import {DashNav} from '../DashNav/dashNav.component';
import './viewNursery.component.css';

export const viewNursery = ()=>{
    return(
        <>
          <Sidebar />
         <div className="main-content">
          <DashNav />
         <main>
            <h2 className="dash-title">Nursery-List</h2>
           <Link to ="/dashboard/AddNursery"><button className="primary">Add Nursery</button></Link>
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Nursery Name</th>
                            <th>Nursery Image</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Buddha Nursery</td>
                        <td><img src="../images/plant.jpg" alt="cactus"/></td>
                        <td>9877777777</td>
                        <td>Kathmandu,Nepal</td>
                        <td>lorem...lorem...lorem</td>
                        <td>
                            <i className="fas fa-pencil-alt"> Edit</i>
                            <i className="fas fa-trash-alt"> Delete</i>
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