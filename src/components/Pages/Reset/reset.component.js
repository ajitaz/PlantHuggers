import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Reset/reset.component.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;


class Reset extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                password: '',
                confirmPassword: ''
            },
            error: {
                password: '',
                confirmPassword: ''
            },
            isValidForm: ''
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

    validateForm(fieldName) {
        let errMsg;
        switch (fieldName) {
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
                isValidForm: error.length === 0 && this.state.data.password != '' && this.state.data.confirmPassword != ''
            })

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            password: this.state.data.password,
            uname: this.props.match.params.uname,
            value: 'resetPassword'
        }
        axios.post(`${BASE_URL}/action.php`, formData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                alert("Your password has been Reset.Now you can login with new password")
                this.props.history.push({
                    pathname: '/login',
                    state: {
                        fromRegister: false
                    }
                })
            })
    }


    render() {
        return (
            <>
                <div className="main" style={{ backgroundImage: 'url(../images/outdoor.jpg)', backgroundSize: "cover" }}>
                    <div className="form-container">
                        <form className="form-wrap" onSubmit={this.handleSubmit}>
                            <h2>Reset Password</h2>
                            <div className="form-box">
                                <label>New Password</label>
                                <input type="password" name="password" onChange={this.handleChange} />
                                <p className="error">{this.state.error.password}</p>
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" onChange={this.handleChange} />
                                <p className="error">{this.state.error.confirmPassword}</p>
                            </div>
                            <div className="form-submit">
                                <button type="submit" disabled={!this.state.isValidForm}>Reset</button>
                            </div>
                        </form>
                    </div>
                    <Link to={{
                        pathname: '/login',
                        state: { fromRegister: false }
                    }}><button className="loginbtn" style={{ cursor: 'pointer' }}> &#8592; Back to Login</button></Link>
                </div>
            </>
        )
    }
}

export default withRouter(Reset);