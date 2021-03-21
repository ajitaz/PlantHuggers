import React, { Component } from 'react';
import './addCategory.component.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class AddCategory extends Component {
    constructor() {
        super();
        this.state = {
            cname: '',
            description: '',
            image: ''
        }
    }

    handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            this.setState({
                [name]: e.target.files[0]
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('cname', this.state.cname)
        formData.append('description', this.state.description)
        formData.append('image', this.state.image)

        axios.post(`${BASE_URL}/addCategory.php`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'

            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                
                alert(res);
                this.props.history.push('/dashboard/setting')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="title">Add Category</div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="cname">Category Name</label>
                    <input type="text" name="cname" placeholder="Category Name.." onChange={this.handleChange} />
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="description" onChange={this.handleChange} />
                    <label htmlFor="img">Select image:</label>
                    <input type="file" name="image" onChange={this.handleChange} />
                    <br /> <br /> <br />
                    <input type="submit" value="ADD" />
                </form>
            </>
        )
    }


}

