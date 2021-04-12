import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { add_to_cart_ac } from '../../../Actions/Order/order.action';
import './cart.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL

const CartComponent = (props) => {

    const [state, setState] = useState({
        data: []
    })

    function getOrder() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewOrder`)
            .then(res => {
                setState({
                    data: res.data.filter((order) => {
                        if (order.id == localStorage.getItem('uid')) {
                            return order
                        }
                    })
                })
            })
    }

    useEffect(() => {
        getOrder();
    }, [])

    useEffect(() => {
        props.addToCart(state.data)
    }, [state.data])

    function handleDelete(id, value) {
        // edit redux store
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

    function handleCheckout() {
        // backend 
        // props.cart.map((order)=>{
        // axios
        // })
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
                    props.cart.map((result, index) => {
                        total += parseInt(result.price)
                        return (
                            <div key={index} className="cart-row">
                                <span className="cart-item"><img src={`../images/${result.iname}`} alt="" /></span>
                                <span className="cart-pname">{result.pname}</span>
                                <span className="cart-quantity">{result.quantity}</span>
                                <span className="cart-price">Rs.{result.price}</span>
                                <span className="cart-action"><button className="btn-danger" style={{ cursor: 'pointer' }} onClick={() => { handleDelete(result.oid, 'deleteOrder') }}>Remove</button></span>
                            </div>
                        )
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

const mapStateToProps = (rootStore) => ({
    cart: rootStore.order.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (data) => { dispatch(add_to_cart_ac({data})) }
})

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent)