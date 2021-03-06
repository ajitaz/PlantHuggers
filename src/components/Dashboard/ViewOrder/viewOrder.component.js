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
                                        <th>Price (per pcs)</th>
                                        <th>Quantity</th>
                                        <th>User Name</th>
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
                                                    <td>{result.name}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i>...more</i></button>} contentStyle={{ width: "600px", height: 'auto' }} position="right center"  modal>
                                                            {close => (
                                                            <div className="modal">
                                                                <button className="close" onClick={close}>&times;</button>
                                                            <h2>Name : {result.full_name}</h2>
                                                            <h2>Delivery Address : {result.delivery_address}</h2>
                                                         <h2>Phone No : {result.phone_no}</h2>
                                                              <table>
                                                                <thead>
                                                                    <tr>
                                                                     <th>Order ID</th>
                                                                      <th>Product Name</th>
                                                                      <th>Quantity</th>
                                                                      <th>Total Price</th>
                                                                
                                                                         </tr>
                                                                    </thead>
                                                                      <tbody>
                                                                          <tr>
                                                                    <td>{result.oid}</td>
                                                                    <td>{result.pname}</td>
                                                                    <td>{result.quantity}</td>
                                                                    <td> {parseInt(result.price) * parseInt(result.quantity)}</td>
                                                                          </tr>
                                                                          </tbody>
                                                                          </table>
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