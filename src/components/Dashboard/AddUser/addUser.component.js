import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addUser.component.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../common/Button/button.component';

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
            },
            error: {
                ...defaultForm
            },
            isSubmitting: false,
            isValidForm: false
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
            this.validateForm(name);
        })

    }

    validateForm = (fieldName) => {
        let errMsg;
        switch (fieldName) {
            case 'username':
                errMsg = this.state.data[fieldName]
                    ? ''
                    : 'required field*';
                break;
            case 'password':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].length < 5
                        ? 'weak password'
                        : ''
                    : 'required field*';
                break;

            case 'email':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].includes('@') && this.state.data[fieldName].includes('.com')
                        ? ''
                        : 'Invalid email!!'
                    : 'required field*';
                break;
            case 'phone':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].length > 10 || this.state.data[fieldName].length < 9
                        ? 'invalid Phone number'
                        : ''
                    : 'required field*';
                break;

            default:
                break;
        }
        this.setState((preState) => ({
            error: {
                ...preState.error,
                [fieldName]: errMsg
            }
        }), () => {
            const error = Object.values(this.state.error).filter(err => err);
            this.setState({
                isValidForm: error.length === 0
            })
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
                            <form onSubmit={this.handleSubmit} method="POST" noValidate>
                                <label htmlFor="uname">UserName</label>
                                <input type="text" id="uname" name="username" placeholder="Username.." onChange={this.handleChange} />
                                <p className="error">{this.state.error.username}</p>
                                <label htmlFor="psw">password</label>
                                <input type="password" id="psw" name="password" onChange={this.handleChange} />
                                <p className="error">{this.state.error.password}</p>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email Id.." onChange={this.handleChange} />
                                <p className="error">{this.state.error.email}</p>
                                <label htmlFor="phone">Phone</label>
                                <input type="Number" id="phone" name="phone" placeholder="Phone Number" onChange={this.handleChange} />
                                <p className="error">{this.state.error.phone}</p>

                                <label htmlFor="designation">Designation</label>
                                <select id="designation" name="flag" onChange={this.handleChange} >
                                    <option value="">None</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="NA">Nursery Admin</option>
                                </select>

                                <Button
                                    enabledLable='ADD'
                                    isValidForm={this.state.isValidForm}
                                    isSubmitting={this.state.isSubmitting}
                                ></Button>
                            </form>
                        </div>
                    </main>

                </div>
            </>
        )
    }

}