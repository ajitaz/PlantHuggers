import axios from 'axios';
import React, { Component } from 'react';
import notify from '../../../Util/notify';
import './editArticle.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;


const defaultForm = {
    aid: '',
    title: '',
    description: ''
}

export class EditArticle extends Component {

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
                aid: this.props.editData.aid,
                title: this.props.editData.title,
                description: this.props.editData.a_description,
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
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...this.state.data,
            value: 'editArticle'
        }
        axios.post(`${BASE_URL}/action.php`, data, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showInfo('Article Edited....')
                this.props.close()
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <>
                <div className="title">Edit Article</div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label htmlFor="name">Article Title</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.data.title} />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={this.handleChange} value={this.state.data.description} />
                    <br /><br /><br /><br /><br /><br />
                    <input type="submit" value="Edit" />
                </form>
            </>
        )
    }
}