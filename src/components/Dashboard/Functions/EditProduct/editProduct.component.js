import React, { Component } from 'react';
import './editProduct.component.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultForm = {
    pid: '',
    pname: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
}
export class EditProduct extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ...defaultForm
            },
            categoryData: []
        }
    }

    getCategory() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`)
            .then(res => {
                this.setState({
                    categoryData: res.data
                })
            })
    }

    componentDidMount() {
        this.getCategory();
        this.setState({
            data: {
                pid: this.props.editData.pid,
                pname: this.props.editData.pname,
                description: this.props.editData.p_description,
                category: this.props.editData.cname,
                price: this.props.editData.price,
                quantity: this.props.editData.quantity
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
            console.log('edited state>> ', this.state.data)
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...this.state.data,
            value :'editProduct',
            cid : this.props.editData.cid
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
                <div className="title">Edit Product</div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label htmlFor="pname">Product Name</label>
                    <input type="text" name="pname" onChange={this.handleChange} value={this.state.data.pname} />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={this.handleChange} value={this.state.data.description} />
                    <label htmlFor="price">Price</label>
                    <input type="Number" name="price" onChange={this.handleChange} value={this.state.data.price} />
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" onChange={this.handleChange} value={this.state.data.quantity} />
                    <label htmlFor="category">Category</label>
                    <select name="category" onChange={this.handleChange}>
                        <option vlaue={this.props.editData.cid}>{this.state.data.category}</option>
                        {
                            this.state.categoryData.map((result, index) => {
                                if (result.cid !== this.props.editData.cid) {
                                    return (
                                        <option key={index} value={result.cid}>{result.cname}</option>
                                    )
                                }

                            })
                        }
                    </select>
                    <br /><br /><br />
                    <input type="submit" value="Edit" />
                </form>
            </>
        )
    }

}