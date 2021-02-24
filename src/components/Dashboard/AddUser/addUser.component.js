import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addUser.component.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:80/plant_hugger_php/addUser.php';

const defaultForm = {
    username: '',
    password: '',
    email: '',
    flag: ''
}

export class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ...defaultForm
            }
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((preState) => ({
            data: {
                ...preState.data,
                [name]: value
            }
        }), () => {
            //form valid
            console.log('check state', this.state);
        })

    }


    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.data;
        axios.post(BASE_URL, data, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

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
                    <main>
                        <h2 className="dash-title">Add User</h2>

                        <div className="form">
                            <form onSubmit={this.handleSubmit} method="POST">
                                <label htmlFor="uname">UserName</label>
                                <input type="text" id="uname" name="username" placeholder="Username.." onChange={this.handleChange} />

                                <label htmlFor="psw">password</label>
                                <input type="password" id="psw" name="password" onChange={this.handleChange} />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email Id.." onChange={this.handleChange} />

                                <label htmlFor="designation">Designation</label>
                                <select id="designation" name="flag" onChange={this.handleChange} >
                                    <option value ="">None</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="NA">Nursery Admin</option>
                                </select>

                                <input type="submit" value="Add" />
                            </form>
                        </div>
                    </main>

                </div>
            </>
        )
    }

}