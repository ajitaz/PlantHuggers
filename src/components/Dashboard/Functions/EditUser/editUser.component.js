import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import notify from '../../../Util/notify';
import './editUser.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultForm = {
    id: '',
    username: '',
    email: '',
    phone: '',
    flag: ''
}

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ...defaultForm
            }
        }
    }

    componentDidMount() {
        this.setState({
            data: {
                id: this.props.editData.id,
                username: this.props.editData.username,
                email: this.props.editData.email,
                phone: this.props.editData.phone,
                flag: this.props.editData.flag
            }
        })
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
        }
        )

    }


    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...this.state.data,
            value: 'edit'
        }
        axios.post(`${BASE_URL}/action.php`, data, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showInfo('User Edited')
                this.props.close()
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <>
                <div className="title">Edit User</div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label htmlFor="uname">UserName</label>
                    <input type="text" id="uname" name="username" placeholder="Username.." onChange={this.handleChange} value={this.state.data.username} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email Id.." onChange={this.handleChange} value={this.state.data.email} />
                    <label htmlFor="phone">Phone</label>
                    <input type="Number" id="phone" name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.data.phone} />
                    <label htmlFor="designation">Designation</label>
                    <select id="designation" name="flag" onChange={this.handleChange} value={this.state.data.flag} >
                        <option value="">None</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="NA">Nursery Admin</option>
                    </select>
                    <br /><br /><br /><br /><br /><br />
                    <input type="submit" value="Edit" />
                </form>


            </>
        )
    }
}

export default withRouter(EditUser);