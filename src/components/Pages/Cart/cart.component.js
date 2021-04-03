import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cart.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL

export const Cart = () => {

    const [state, setState] = useState({
        data: []
    })

    function getOrder() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewOrder`)
            .then(res => {
                setState({
                    data: res.data
                })
            })
    }

    useEffect(() => {
        getOrder();
    }, [])

    function handleClick(id, value) {
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
                console.log(res);
                getOrder();

            })

    }

    let total = 0

    return (
        <>
            <section className="container content-section">
                <h2 className="section-header">shopping cart</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">Items</span>
                    <span className="cart-pname cart-header cart-column">Name</span>
                    <span className="cart-quantity cart-header cart-column">Quantity</span>
                    <span className="cart-price cart-header cart-column">Price</span>
                    <span className="cart-action cart-header cart-column">Action</span>
                </div>
                {
                    state.data.map((result, index) => {
                        if (result.id == localStorage.getItem('uid')) {
                            total += parseInt(result.price)
                            return (

                                <div key={index} className="cart-row">
                                    <span className="cart-item"><img src={`../images/${result.iname}`} alt="" /></span>
                                    <span className="cart-pname">{result.pname}</span>
                                    <span className="cart-quantity">{result.quantity}</span>
                                    <span className="cart-price">Rs.{result.price}</span>
                                    <span className="cart-action"><button className="btn-danger" style={{ cursor: 'pointer' }} onClick={() => { handleClick(result.oid, 'deleteOrder') }}>Remove</button></span>
                                </div>

                            )
                        }
                    })
                }
                <div className="cart-total">
                    <strong className="cart-total-title">Total</strong>
                    <span className="cart-total-price">Rs.{total}</span>
                </div>
                <button className="btn btn-primary btn-purchase" type="button" style={{ cursor: 'pointer' }}>Checkout</button>
            </section>
        </>
    )
}