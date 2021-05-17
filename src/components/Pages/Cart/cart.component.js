import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { add_to_cart_ac, clear_fresh_cart_ac, remove_from_cart_ac } from '../../../Actions/Order/order.action';
import './cart.component.css';
import emailjs from 'emailjs-com';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL

const CartComponent = (props) => {

    const [cancelItems, setCancelItems] = useState([])

    useEffect(() => {
        fetchCancelOrder();
        props.addToCart();
    }, [])

    function fetchCancelOrder() {
        axios.get(`${BASE_URL}/viewContent.php?option=getCancleOrder`)
            .then(res => {
                setCancelItems(res.data)
            })
    }

    function handleCheckout() {
        let cartItem = ''
        props.freshCart.forEach((element, index) => {
            cartItem += (++index) + ':- ' + element['pname'] + '     '
        })
        axios.get(`${BASE_URL}/viewContent.php?option=emailUser&uid=${localStorage.getItem('uid')}`)
            .then(res => {
                var templateParams = {
                    name: res.data[0].username,
                    message: cartItem,
                    user_email: res.data[0].email
                };
                emailjs.send('service_c5455lg', 'template_5r3vdvl', templateParams, 'user_CQQWpWC0YP59vNipgh111')
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (err) {
                        console.log('FAILED...', err);
                    });
            })

        props.freshCart.forEach((item) => {
            let data = {
                pid: item.pid,
                nid: item.nid,
                uid: localStorage.getItem('uid'),
                quantity: item.orderQuantity,
                value: 'addOrder'
            }
            axios.post(`${BASE_URL}/action.php`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {},
                responseType: 'json'
            })
                .then(res => {
                    console.log('Orders added to Database>>', res)

                })

        })
        setTimeout(() => {
            props.clearFreshCart()
            props.addToCart()
            notify.showInfo('Your orders has been notified to Nursery.')
        }, 1500)
        notify.showSuccess('Your Orders has been made.')

    }

    function addCancleOrder(oid, email, name) {
        let data = {
            oid: oid,
            value: 'addCancelOrder'
        }
        axios.post(`${BASE_URL}/action.php`, data, {
            headers: {
                'Content-Type': 'application/json'
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                let cancelEmail = {
                    user_email: email,
                    message: 'This order has been canceled => ' + oid + ' ',
                    name: name
                }
                emailjs.send('service_c5455lg', 'template_5r3vdvl', cancelEmail, 'user_CQQWpWC0YP59vNipgh111')
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (err) {
                        console.log('FAILED...', err);
                    });

                fetchCancelOrder()
            })
    }

    function handleCancel(item) {
        addCancleOrder(item.oid, item.nur_email, item.name)
    }
    let total = 0
    let currentCart = props.freshCart.length === 0
        ? ''
        : <>
            <h2 className="section-header">Your Cart</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">Items</span>
                <span className="cart-pname cart-header cart-column">Name</span>
                <span className="cart-quantity cart-header cart-column">Quantity</span>
                <span className="cart-price cart-header cart-column">Price</span>
                <span className="cart-action cart-header cart-column">Action</span>
            </div>
            {
                props.freshCart.map((result, index) => {
                    total += parseInt(result.price)
                    return (
                        <div key={index} className="cart-row">
                            <span className="cart-item"><img src={`../images/${result.iname}`} alt="" /></span>
                            <span className="cart-pname">{result.pname}</span>
                            <span className="cart-quantity">{result.orderQuantity}</span>
                            <span className="cart-price">Rs.{result.price}</span>
                            <span className="cart-action"><button className="btn btn-danger" style={{ cursor: 'pointer' }} onClick={() => { props.removeCartItem(index) }}>Remove</button></span>
                        </div>
                    )
                })
            }
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">Rs.{total}</span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button" style={{ cursor: 'pointer' }} onClick={handleCheckout}>Checkout</button>
        </>

    let pendingCart = props.cart.length == 0
        ? <> <h2 className="section-header">NO Orders Pending</h2></>
        : <>
            <h2 className="section-header">Your Orders</h2>
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
                    let action = !cancelItems.some(item => result.oid == item.oid)
                        ? <>
                            <span className="cart-action"><button className="btn btn-warning" disabled>ORDERED</button></span>
                            <span className="cart-action"><button className="btn btn-warning" onClick={(index) => { handleCancel(result) }} style={{ backgroundColor: '#f05c0d', cursor: 'pointer' }}>Cancel</button></span>
                        </>
                        : <>
                            <span className="cart-action"><button className="btn btn-warning" style={{ backgroundColor: '#bccc2e', color: 'black' }} disabled>Requested Cancel order</button></span>
                        </>
                    return (
                        <div key={index} className="cart-row">
                            <span className="cart-item"><img src={`../images/${result.iname}`} alt="" /></span>
                            <span className="cart-pname">{result.pname}</span>
                            <span className="cart-quantity">{result.quantity}</span>
                            <span className="cart-price">Rs.{result.price}</span>
                            {action}

                        </div>
                    )
                })
            }
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">Rs.{total}</span>
            </div>
        </>


    return (
        <>
            <section className="container content-section">
                {currentCart}
                {pendingCart}
            </section>
        </>
    )
}

const mapStateToProps = (rootStore) => ({
    cart: rootStore.order.cart,
    freshCart: rootStore.order.freshCart

})

const mapDispatchToProps = dispatch => ({
    addToCart: () => { dispatch(add_to_cart_ac()) },
    removeCartItem: (index) => { dispatch(remove_from_cart_ac(index)) },
    clearFreshCart: () => { dispatch(clear_fresh_cart_ac()) }

})

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent)