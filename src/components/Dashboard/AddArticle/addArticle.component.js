import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import './addArticle.component.css';
import { DashNav } from '../DashNav/dashNav.component';
import axios from 'axios';

const BASE_URL = 'http://localhost:80/plant_hugger_php/addArticle.php';



export class AddArticle extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            category: '',
            image: '',
            author: 'Admin'//need to make this dynamic
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
        formData.append(this.state.title)
        formData.append(this.state.descripion)
        formData.append(this.state.category)
        formData.append(this.state.image)
        formData.append(this.state.author)

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

    getCategory = () =>{
        //get category id and name from database 
        //return relation
    }

    render() {
        // let category = this.getCategory
        return (
            <>
                <div className="title">Add Article</div>
                <form method="POST" onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title.." onChange={this.handleChange} />
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="description" onChange={this.handleChange} />
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" placeholder="Category.." onChange={this.handleChange} />
                    <label htmlFor="image">Select image:</label>
                    <input type="file" name="image" onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </>
        )
    }

}