import React, { Component } from 'react';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Link } from 'react-router-dom';
import { DashNav } from '../DashNav/dashNav.component';
import './viewProduct.component.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { EditProduct } from '../Functions/EditProduct/editProduct.component';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class viewProduct extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }

    }

    getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getProducts();
    }

    handleClick = (id, value) => {
        let actionData = {
            pid: id,
            value: value
        }
        axios.post(`${BASE_URL}/action.php`, actionData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                console.log(res);
                this.getProducts();

            })

    }


    render() {
        return (
            <>
                <Sidebar />
                <div className="main-content">
                    <DashNav />
                    <main>
                        <h2 className="dash-title">Product-List</h2>
                        <Link to="/dashboard/addProduct"><button className="primary">Add Product</button></Link>
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.pname}</td>
                                                    <td><img src={`../images/${result.iname}`} alt="cactus" /></td>
                                                    <td>{result.p_description}</td>
                                                    <td>{result.cname}</td>
                                                    <td>{result.price}</td>
                                                    <td>{result.quantity}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i className="fas fa-pencil-alt"> Edit</i></button>} position="right center" modal onClose={() => { this.getProducts() }}>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
                                                                    <EditProduct editData={result} />
                                                                </div>
                                                            )}
                                                        </Popup>

                                                        <button className="delete" onClick={() => { this.handleClick(result.pid, 'deleteProduct') }}> <i className="fas fa-trash-alt"> Delete</i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}