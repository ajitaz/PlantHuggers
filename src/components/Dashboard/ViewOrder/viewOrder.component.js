import React, { Component } from 'react';
import axios from 'axios';
import './viewOrder.component.css';
import Popup from 'reactjs-popup';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class ViewOrder extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
        source = axios.CancelToken.source()
    }

    getOrder() {
        let option = this.props.isNurseryDashboard === true
            ? `nurseryViewOrder&uid=${localStorage.getItem('uid')}`
            : 'viewOrder'
        axios.get(`${BASE_URL}/viewContent.php?option=${option}`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    componentDidMount() {
        this.getOrder();
    }

    componentWillUnmount() {
        if (source) {
            source.cancel("ViewOrder got Unmounted")
        }
    }

    handleClick = (id, value) => {
        let actionData = {
            oid: id,
            value: value
        }
        axios.post(`${BASE_URL}/action.php`, actionData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showSuccess("Order Deleted.....")
                this.getOrder();

            })

    }

    render() {
        return (
            <>
                <div id="main-content">
                    <main>
                        <h2 className="dash-title">Order-List</h2>
                        <div className="olist">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>User Name</th>
                                        <th>Phone</th>
                                        <th>Nursery</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.oid}</td>
                                                    <td><img src={`../images/${result.iname}`} /></td>
                                                    <td>{result.pname}</td>
                                                    <td>{result.price}</td>
                                                    <td>{result.quantity}</td>
                                                    <td>{result.username}</td>
                                                    <td>{result.phone_no}</td>
                                                    <td>{result.name}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i>...more</i></button>} position="right center" modal>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
                                                                </div>
                                                            )}
                                                        </Popup>

                                                        <button className="delete" onClick={() => { this.handleClick(result.oid, 'deleteOrder') }}> <i className="fas fa-trash-alt"> Delete</i></button>
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