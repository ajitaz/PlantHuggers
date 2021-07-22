import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from '../../common/Button/button.component';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;


const defaultForm = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    role: 'User'
}

class Register extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ...defaultForm
            },
            error: {
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                phone: ''
            },
            isValidForm: false,
            isSubmitting: false
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
                        ? 'weak password!!'
                        : ''
                    : 'required field*';
                break;
            case 'confirmPassword':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName] === this.state.data.password
                        ? ''
                        : 'Password didnot match'
                    : 'required field*';
                break;
            case 'email':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].includes('@') && this.state.data[fieldName].includes('.com')
                        ? ''
                        : 'Invalid email!!'
                    : 'required field*'
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
        let formData = this.state.data;
        axios.post(`${BASE_URL}/addUser.php`, formData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showSuccess('Successfuly Registered')
                this.props.history.push({
                    pathname: '/login',
                    state: { fromRegister: true }
                })

            })
            .catch(err => {
                console.log(err);
            })

    }


    render() {
        return (
            <form id="register-form" onSubmit={this.handleSubmit}>
                <input className="input-form" type="text" name="username" placeholder="Enter your Username" onChange={this.handleChange} required /><br /><br />
                <p className="error">{this.state.error.username}</p>
                <input className="input-form" type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} required /><br /><br />
                <p className="error">{this.state.error.password}</p>
                <input className="input-form" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} required /><br /><br />
                <p className="error">{this.state.error.confirmPassword}</p>
                <input className="input-form" type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} required /><br /><br />
                <p className="error">{this.state.error.email}</p>
                <input className="input-form" type="Number" name="phone" placeholder="Enter your Phone Number" onChange={this.handleChange} required /><br /><br />
                <p className="error">{this.state.error.phone}</p>
                <Button
                    enabledLable='Register'
                    isValidForm={this.state.isValidForm}
                    isSubmitting={this.state.isSubmitting}
                ></Button>
                <br /><br />
            </form>
        )
    }
}

export default withRouter(Register);