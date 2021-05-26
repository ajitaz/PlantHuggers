import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/button.component';
import './login.component.css';
import Register from './register.component'
import notify from './../../Util/notify'
import Popup from 'reactjs-popup';
import emailjs from 'emailjs-com';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_URL = process.env.REACT_APP_REACT_URL;

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            forgotUname: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post(`${BASE_URL}/verifyUser.php`, formData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                switch (res.data['flag']) {
                    case 'Admin':
                        localStorage.setItem('uname', res.data['uname']);
                        localStorage.setItem('uid', res.data['id']);
                        localStorage.setItem('flag', res.data['flag']);
                        this.props.history.push('/dashboard');
                        break;
                    case 'User':
                        localStorage.setItem('uname', res.data['uname']);
                        localStorage.setItem('uid', res.data['id']);
                        localStorage.setItem('flag', res.data['flag']);
                        this.props.history.push('/');
                        break;
                    case 'NA':
                        localStorage.setItem('uname', res.data['uname']);
                        localStorage.setItem('uid', res.data['id']);
                        localStorage.setItem('flag', res.data['flag']);
                        this.props.history.push('/nurseryDashboard');

                        break;
                    default:
                        notify.showError('Username or Password did not match!')
                }
            })
            .catch(err => console.log(err));
    }

    handelForgotPassword = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    sendForgotPassword = (close) => {
        axios.get(`${BASE_URL}/viewContent.php?option=viewUser`)
            .then(res => {
                let emailMessage = {
                    user_email: this.state.email,
                    name: this.state.forgotUname,
                    message: `${REACT_URL}/resetPassword/${this.state.forgotUname}`
                }
                if (res.data.some(user => user.username == this.state.forgotUname && user.email == this.state.email)) {
                    emailjs.send('service_c5455lg', 'template_fpinuzw', emailMessage, 'user_CQQWpWC0YP59vNipgh111')
                        .then(function (response) {
                            console.log('SUCCESS!', response.status, response.text);
                            alert("Please check your email, a reset link has been sent")
                        }, function (err) {
                            console.log('FAILED...', err);
                        });
                } else {
                    notify.showError("Username or Email didnot matched!. Please enter correct information.")
                }
                close()
            })
    }

    render() {
        if (this.props.location.state.fromRegister == true) {
            login();
        }
        function register() {
            document.getElementById("login-form").style.left = "-450px";
            document.getElementById("register-form").style.left = "-340px";
            document.getElementById("pointer-btn").style.left = "215px";
            document.getElementById("login").style.color = "#848484";
            document.getElementById("register").style.color = "#4CAF50";
            document.getElementById("action_title").textContent = "Register";
        }

        function login() {
            document.getElementById("login-form").style.left = "10px";
            document.getElementById("register-form").style.left = "450px";
            document.getElementById("pointer-btn").style.left = "30px";
            document.getElementById("login").style.color = "#4CAF50";
            document.getElementById("register").style.color = "#848484";
            document.getElementById("action_title").textContent = "Login";
        }
        return (
            <>
                <div className="main" style={{ backgroundImage: 'url(../images/background.jpg)', backgroundSize: "cover" }}>
                    <div className="card">
                        <div className="card-title">
                            <h3><i className="fa fa-user-circle-o" aria-hidden="true"></i> User <span id="action_title">Login</span></h3>
                        </div>
                        <div className="card-body">
                            <div className="card-body-top">
                                <button id="login" className="btn" name="login" onClick={login}>login</button>
                                <button id="register" className="btn" name="register" onClick={register}>register</button>
                                <div id="pointer-btn"></div>
                            </div>
                            <div className="card-body-login">
                                <form id="login-form" onSubmit={this.handleSubmit}>
                                    <input className="input-form" type="text" placeholder="Enter your username" name="username" onChange={this.handleChange} required /><br /><br />
                                    <input className="input-form" type="password" placeholder="Enter your password" name="password" onChange={this.handleChange} required /> <br /><br /><br /><br />
                                    <Popup trigger={<p style={{ color: "blue", cursor: 'pointer', textDecoration: 'underLine' }}>Forgot Password?</p>} contentStyle={{ width: "700px", height: '300px' }} position='top center' modal>
                                        {close => (
                                            <div className="modal">
                                                <div style={{ marginTop: "25px" }}>
                                                    <h2 className="forget-title">Please enter your username and email that you provided during Registration.</h2><br />
                                                    <button className="close" style={{ color: 'white' }} onClick={close}>&times;</button>
                                                    <label >Your Username</label>
                                                    <input type="text" name="forgotUname" placeholder="Enter your username" onChange={this.handelForgotPassword}></input>
                                                    <label>Your Email</label>
                                                    <input type="email" name="email" placeholder="Enter your Email address" onChange={this.handelForgotPassword}></input>
                                                    <div className="forget-containar">
                                                    <button className="forget-btn" onClick={() => {
                                                        this.sendForgotPassword(close)
                                                    }}>Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Popup><br />
                                    <Button
                                        isSubmitting={false}
                                        isValidForm={true}
                                        enabledLable='Login'
                                        disabledLable='Logining'
                                    />
                                </form>
                                <Register />

                            </div>
                        </div>
                        <Link to="/"><button className="loginbtn" style={{ cursor: 'pointer' }}> &#8592; Back to Home</button></Link>
                    </div>
                </div>

            </>
        )

    }
}
