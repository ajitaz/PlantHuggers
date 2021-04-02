import React, { Component } from 'react';
import { DashNav } from '../DashNav/dashNav.component';
import axios from 'axios';
import './order.component.css';
import Popup from 'reactjs-popup';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Order extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }

    }

    getOrder() {
        let option = (localStorage.getItem('flag') === 'NA')
            ? `nurseryOrder&uid=${localStorage.getItem('uid')}`
            : 'order'
        axios.get(`${BASE_URL}/viewContent.php?option=${option}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getOrder();
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
                this.getOrder();

            })

    }


    render() {
        return (
            <>
                <div className="main-content">
                    <DashNav />
                    <main>
                        <h2 className="dash-title">Order-List</h2>
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
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
                                                    <td><img src={`../images/${result.iname}`}/></td>
                                                    <td>{result.cname}</td>
                                                    <td>{result.price}</td>
                                                    <td>{result.quantity}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i className="fas fa-pencil-alt"> View</i></button>} position="right center" modal onClose={() => { this.getProducts() }}>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
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