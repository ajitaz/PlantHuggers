import React, { Component } from 'react';
import './cart.component.css';


export class Cart extends Component {
    render() {
        return (
            <>
               <section className="container content-section">
            <h2 className="section-header">shopping cart</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">Items</span>
                <span className="cart-quantity cart-header cart-column">Quantity</span>
                <span className="cart-price cart-header cart-column">Price</span>
                <span className="cart-action cart-header cart-column">Action</span>
            </div>
            <div className="cart-row">
                <span className="cart-item"><img src="../images/plant2.jpg" alt="" /></span>
                <span className="cart-quantity">5</span>
                <span className="cart-price">Rs.88</span>
                <span className="cart-action"><button className="btn-danger">Remove</button></span>
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">Rs.0</span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button">Checkout</button>
        </section>
            </>
        )
    }
}