import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar/sidebar.component';
import './user.component.css';
const BASE_URL = 'http://localhost:80/plant_hugger_php';

export class User extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/viewUser.php`)
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log('Data in  State :', this.state);
            })
    }

    render() {

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
                                    {
                                        this.state.data.map((result ,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.username}</td>
                                                    <td>{result.email}</td>
                                                    <td>{result.flag}</td>
                                                    <td>
                                                        <button className="edit"><i className="fas fa-pencil-alt"> Edit</i></button>
                                                        <button className="delete"> <i className="fas fa-trash-alt"> Delete</i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}