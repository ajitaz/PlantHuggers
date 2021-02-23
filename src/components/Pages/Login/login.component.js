import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.component.css';
import { Register } from './register.component'

const BASE_URL = 'http://localhost:80/plant_hugger_php/verifyUser.php';

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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
        let formData = this.state;
        axios.post(BASE_URL, formData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                    if(res.data === 'VALID'){
                        this.props.history.push('/dashboard');
                    } else {
                        console.log("DID NOT MATCH");
                    }
            })
            .catch(err => console.log(err));


    }



    render() {

        function register() {
            document.getElementById("login-form").style.left = "-450px";
            document.getElementById("register-form").style.left = "25px";
            document.getElementById("pointer-btn").style.left = "215px";
            document.getElementById("login").style.color = "#848484";
            document.getElementById("register").style.color = "#4CAF50";
            document.getElementById("action_title").textContent = "Register";
        }

        function login() {
            document.getElementById("login-form").style.left = "25px";
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
                                    <input className="submit-form" type="submit" value="Login" />
                                </form>
                                <Register />

                            </div>
                        </div>
                        <Link to="/"><button className="loginbtn"> &#8592; Back to Home</button></Link>
                    </div>
                </div>

            </>
        )

    }
}