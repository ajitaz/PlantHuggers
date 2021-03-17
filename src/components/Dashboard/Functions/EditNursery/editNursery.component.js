import axios from 'axios';
import React, { Component } from 'react';
import './editNursery.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;


const defaultForm = {
    nid:'',
    name: '',
    phone: '',
    address: '',
    description: ''
}

export class EditNursery extends Component {

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
                nid: this.props.editData.nid,
                name: this.props.editData.name,
                phone: this.props.editData.phone,
                description: this.props.editData.description,
                address: this.props.editData.address

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
            //form validation
            console.log(this.state.data)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...this.state.data,
            value :'editNursery'
        }
        axios.post(`${BASE_URL}/action.php`, data, {
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
                <div className="title">Edit Nursery</div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label htmlFor="name">Nursery Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.data.name} />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={this.handleChange} value={this.state.data.description} />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" onChange={this.handleChange} value={this.state.data.phone} />
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" onChange={this.handleChange} value={this.state.data.address} />

                    <br /><br /><br /><br /><br /><br />
                    <input type="submit" value="Edit" />
                </form>
            </>
        )
    }
}