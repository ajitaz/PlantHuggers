import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { DashNav } from '../DashNav/dashNav.component';
import { EditUser } from '../Functions/EditUser/editUser.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import './user.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class User extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getUserlist();
    }

    getUserlist() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewUser`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }



    handleClick = (id, value) => {
        let actionData = {
            id: id,
            value: value
        }
        axios.post(`${BASE_URL}/action.php`, actionData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                console.log(res);
                this.getUserlist();

            })

    }

    render() {

        return (
            <>

                <div className="main-content">
                    <DashNav />
                    <main className="userMain">
                        <h2 className="dash-title">Users-List</h2>
                        <Link to="/dashboard/user/adduser"><button className="primary" style={{cursor:'pointer'}}>Add user</button></Link>
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Designation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.username}</td>
                                                    <td>{result.email}</td>
                                                    <td>{result.phone}</td>
                                                    <td>{result.flag}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i className="fas fa-pencil-alt"> Edit</i></button>} position="right center" modal onClose={() => { this.getUserlist() }}>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
                                                                    <EditUser editData={result} />
                                                                </div>
                                                            )}
                                                        </Popup>

                                                        <button className="delete" onClick={() => { this.handleClick(result.id, 'delete') }}> <i className="fas fa-trash-alt"> Delete</i></button>
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