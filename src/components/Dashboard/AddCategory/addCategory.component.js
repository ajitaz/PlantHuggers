import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addCategory.component.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:80/plant_hugger_php/addCategory.php';

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

        axios.post(BASE_URL, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
                
            }, params: {},
            responseType: 'json'
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Sidebar />
                <div className="main-content">
                    <header>
                        <div className="welcome">
                            <p>Welcome, Ramesh</p>
                        </div>
                        <div className="social-icons">
                            <Link to="/login"><button className="lbtn">Logout</button></Link>
                            <Link to="/"><button className="sbtn">Home</button></Link>
                        </div>
                    </header>
                    <main>
                        <h2 className="dash-title">Add Category</h2>

                        <div className="form">
                            <form onSubmit={this.handleSubmit} noValidate>
                                <label htmlFor="cname">Category Name</label>
                                <input type="text" name="cname" placeholder="Category Name.." onChange={this.handleChange} />
                                <label htmlFor="desc">Description</label>
                                <textarea type="text" name="description" onChange={this.handleChange} />
                                <label htmlFor="img">Select image:</label>
                                <input type="file" name="image" onChange={this.handleChange} />
                                <input type="submit" value="ADD" />
                            </form>
                        </div>
                    </main>

                </div>
            </>
        )
    }

}

