import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import notify from '../../Util/notify';
import EditUser from '../Functions/EditUser/editUser.component';
import './user.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class User extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        source = axios.CancelToken.source()
    }

    componentDidMount() {
        this.getUserlist();
    }

    componentWillUnmount() {
        if (source) {
            source.cancel("User Component got Unmounted")
        }
    }

    getUserlist() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewUser`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
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
                notify.showSuccess('User Deleted...')
                this.getUserlist();

            })

    }

    render() {

        return (
            <>
                <div className="main-content">
                    <main className="userMain">
                        <h2 className="dash-title">Users-List</h2>
                        <Link to="/dashboard/user/adduser"><button className="primary" style={{ cursor: 'pointer' }}>Add user</button></Link>
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
                                                                    <EditUser editData={result} close={close} />
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