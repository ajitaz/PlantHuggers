import axios from 'axios';
import React, { Component } from 'react';

const BASE_URL = 'http://localhost:80/plant_hugger_php'


const defaultForm = {
    username: '',
    password: '',
    email: '',
    flag: 'User'
}

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            data:{
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
            console.log('check state', this.state.data);
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = this.state.data;
        axios.post(`${BASE_URL}/addUser.php`, formData,{
            headers:{
                "Content-Type" : "application/json"
            }, params:{},
            responseType : 'json'
        })
        .then(res => {
            console.log('successfully added');
        })
        .catch(err=>{
            console.log(err);
        })

    }

    render() {
        return (
            <form id="register-form" onSubmit={this.handleSubmit}>
                <input className="input-form" type="text" name="username" placeholder="Enter your full name" onChange={this.handleChange} required /><br /><br />
                <input className="input-form" type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} required /><br /><br />
                <input className="input-form" type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} required /><br /><br />
                <input className="submit-form" type="submit" value="Register" />
            </form>
        )
    }
}