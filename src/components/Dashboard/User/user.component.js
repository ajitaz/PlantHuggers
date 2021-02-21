import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar/sidebar.component';
import './user.component.css';

export const User = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <header>
                    <div className="welcome">
                        <p>Welcome, Ramesh</p>
                    </div>
                    <div className="social-icons">
                        <i className="fas fa-sign-out-alt"></i><span>Logout</span>
                    </div>
                </header>
                <main className="userMain">
                    <h2 className="dash-title">Users-List</h2>
                    <Link to="/dashboard/user/adduser"><button className="primary">Add user</button></Link>
                    <div className="list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Designation</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin</td>
                                    <td>admin@gmail.com</td>
                                    <td>Admin</td>
                                    <td>
                                        <i className="fas fa-pencil-alt"> Edit</i>
                                        <i className="fas fa-trash-alt"> Delete</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ramkrishna</td>
                                    <td>Ramkrishna@gmail.com</td>
                                    <td>user</td>
                                    <td>
                                        <i className="fas fa-pencil-alt"> Edit</i>
                                        <i className="fas fa-trash-alt"> Delete</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Danish</td>
                                    <td>danish@gmail.com</td>
                                    <td>user</td>
                                    <td>
                                        <i className="fas fa-pencil-alt"> Edit</i>
                                        <i className="fas fa-trash-alt"> Delete</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nishant</td>
                                    <td>Nishant@gmail.com</td>
                                    <td>Nursery Admin</td>
                                    <td>
                                        <i className="fas fa-pencil-alt"> Edit</i>
                                        <i className="fas fa-trash-alt"> Delete</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Utsav</td>
                                    <td>utsav@gmail.com</td>
                                    <td>Admin</td>
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