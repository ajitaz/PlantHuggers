import React, { Component } from 'react';

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
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
        console.log(this.state);

    }

    render() {
        return (
            <form id="register-form" onSubmit={this.handleSubmit}>
                <input className="input-form" type="text" name="name" placeholder="Enter your full name" onChange={this.handleChange} required /><br /><br />
                <input className="input-form" type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} required /><br /><br />
                <input className="input-form" type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} required /><br /><br />
                <input className="submit-form" type="submit" value="Register" />
            </form>
        )
    }
}