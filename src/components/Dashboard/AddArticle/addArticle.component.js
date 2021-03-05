import React, { Component } from 'react';
import './addArticle.component.css';
import axios from 'axios';

const BASE_URL = process.env.React_APP_BASE_URL;



export class AddArticle extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            cid: '',
            image: '',
            author: '5',
            data: []

        }
    }

    getCategorylist() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getCategorylist();
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
        formData.append('title', this.state.title)
        formData.append('description', this.state.description)
        formData.append('cid', this.state.cid)
        formData.append('image', this.state.image)
        formData.append('author', this.state.author)

        axios.post(`${BASE_URL}/addArticle.php`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                alert('Successfully Article Added...');
                this.props.history.push('/dashboard/setting')})
            .catch(err => console.log(err))

    }



    render() {
        return (
            <>
                <div className="title">Add Article</div>
                <form method="POST" onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title.." onChange={this.handleChange} />
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="description" onChange={this.handleChange} />
                    <label htmlFor="category">Category</label>
                    <select name="cid" onChange={this.handleChange}>
                        <option value="">None</option>
                        {
                            this.state.data.map((result, index) => {
                                return (
                                    <option key={index} value={result.cid}>{result.cname}</option>
                                )
                            })
                        }
                    </select>

                    <label htmlFor="image">Select image:</label>
                    <input type="file" name="image" onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </>
        )
    }

}

