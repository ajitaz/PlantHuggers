import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './indNursery.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class IndNursery extends Component {
    constructor() {
        super();
        this.state = {
            nursery: [],
            products: []
        }
        this.getNursery();
        this.getProducts();
    }

    getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`)
            .then(res => {
                res.data.map((result) => {
                    if (result.nid == this.props.match.params.nid) {
                        this.setState({
                            nursery: result
                        })
                    }
                })
            })
    }

    getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    render() {
        return (
            <>
                <div className="bgimg-1" style={{ backgroundImage: `url("../images/${this.state.nursery.iname}")` }}>
                    <div className="caption">
                        <span className="border">{this.state.nursery.name}</span>
                    </div>
                </div>

                <div className="cont">
                    <h3>{this.state.nursery.name}</h3>
                    <p>{this.state.nursery.description}</p>
                </div>

                <div className="bgimg-2" style={{ backgroundImage: `url("../images/${this.state.nursery.iname}")` }} >
                </div>

                <div className="contact">
                    <div>
                        <p>Contact</p>
                        <p> <i className="fas fa-phone-alt"></i> {this.state.nursery.phone}</p>
                        <p> <i className="fas fa-map-marker-alt"></i> {this.state.nursery.address}</p>
                    </div>
                </div>

                <div className="small-container">
                    <div className="product-list">
                        <h2>available product</h2>
                        <div className="row grid">
                            {
                                this.state.products.map((product, index) => {
                                    if (product.nid == this.props.match.params.nid) {
                                        return (
                                            <div key={index} className="col-4">
                                                <Link to={`/product?pid=${product.pid}&cid=${product.cid}`}>
                                                    <img src={`/images/${product.iname}`} alt="" />
                                                </Link>
                                                <h4>{product.pname}</h4>
                                                <p>Rs.{product.price}</p>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}