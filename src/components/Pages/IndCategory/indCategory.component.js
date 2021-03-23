import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './indCategory.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class IndCategory extends Component {
    constructor() {
        super();
        this.state = {
            category: [],
            products: []
        }
        this.getCategory();
        this.getProducts();
    }

    getCategory() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`)
            .then(res => {
                res.data.map((result, index) => {
                    if (result.cid == this.props.match.params.cid) {
                        this.setState({
                            category: result
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
                <NavBar />
                <div className="bgimg-1" style={{ backgroundImage: `url("../images/${this.state.category.iname}")` }}>
                </div>
                <div className="cont">
                    <h3>{this.state.category.cname}</h3>
                    <p>{this.state.category.description}</p>
                </div>

                <div className="small-container">
                    <div className="product-list">
                        <h2>{`Related ${this.state.category.cname} Products`}</h2>
                        <div className="row grid">
                            {
                                this.state.products.map((product, index) => {
                                    if (product.cid == this.props.match.params.cid) {
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
                <Footer />
            </>
        )
    }
}