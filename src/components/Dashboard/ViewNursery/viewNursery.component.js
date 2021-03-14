import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import { DashNav } from '../DashNav/dashNav.component';
import './viewNursery.component.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class ViewNursery extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getNursery();
    }

    render() {
        return (
            <>
                <Sidebar />
                <div className="main-content">
                    <DashNav />
                    <main>
                        <h2 className="dash-title">Nursery-List</h2>
                        <Link to="/dashboard/AddNursery"><button className="primary">Add Nursery</button></Link>
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
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.name}</td>
                                                    <td><img src={`../images/${result.iname}`} alt="cactus" /></td>
                                                    <td>{result.phone}</td>
                                                    <td>{result.address}</td>
                                                    <td>{result.description}</td>
                                                    <td>
                                                        <button className="edit"><i className="fas fa-pencil-alt"> Edit</i></button>
                                                        <button className="delete"><i className="fas fa-trash-alt"> Delete</i></button>
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