import React, { Component } from 'react';
import './login.component.css';

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            userPassword: ''
        }

    }

    render() {
    
		function register(){
			document.getElementById("login-form").style.left = "-450px";
			document.getElementById("register-form").style.left = "25px";
			document.getElementById("pointer-btn").style.left = "215px";
			document.getElementById("login").style.color = "#848484";
			document.getElementById("register").style.color = "#4CAF50";
			document.getElementById("action_title").textContent = "Register";
		}

		function login(){
			document.getElementById("login-form").style.left = "25px";
			document.getElementById("register-form").style.left = "450px";
			document.getElementById("pointer-btn").style.left = "30px";
			document.getElementById("login").style.color = "#4CAF50";
			document.getElementById("register").style.color = "#848484";
			document.getElementById("action_title").textContent = "Login";
		}		
        return (
            <>
                <div className="main" style = {{backgroundImage: 'url(../images/background.jpg)'}}>
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
                                <form id="login-form">
                                    <input className="input-form" type="email" placeholder="Enter your email" required /><br /><br />
                                    <input className="input-form" type="password" placeholder="Enter your password" required /> <br /><br /><br /><br />
                                    <input className="submit-form" type="submit" value="Login" />
                                </form>
                                <form id="register-form">
                                    <input className="input-form" type="name" placeholder="Enter your full name" required /><br /><br />
                                    <input className="input-form" type="email" placeholder="Enter your email" required /><br /><br />
                                    <input className="input-form" type="password" placeholder="Enter your password" required /><br /><br />
                                    <input className="submit-form" type="submit" value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="para">
                        <a href="#"><button> &#8592; Back to Home</button></a>
                    </div>
                </div>

            </>
        )

    }
}