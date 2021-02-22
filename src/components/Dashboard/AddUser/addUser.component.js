import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addUser.component.css';


const defaultForm = {
    userName: '',
    password: '',
    email: '',
    designation: ''
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

    hadnleChange = (e) => {
        
    }

    handleSubmit = (e) => {
        //http request
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
                            <i className="fas fa-sign-out-alt"></i><span>Logout</span>
                        </div>
                    </header>
                    <main>
                        <h2 className="dash-title">Add User</h2>

                        <div className="form">
                            <form onSubmit={this.handleSubmit} method="POST">
                                <label for="uname">UserName</label>
                                <input type="text" id="uname" name="username" placeholder="Username.." />

                                <label for="psw">password</label>
                                <input type="password" id="psw" name="password" />
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email Id.." />

                                <label for="designation">Designation</label>
                                <select id="designation" name="designation">
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="Nursery Admin">Nursery Admin</option>
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