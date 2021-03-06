import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shop.component.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class Shop extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            products: []
        }
        source = axios.CancelToken.source()
    }

    getCategories() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    categories: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }

    componentWillUnmount() {
        if (source) {
            source.cancel("Shop component got Unmounted")
        }
    }

    render() {
        return (
            <>
                <div className="small-container">
                    <h2 className="title">All Products</h2>
                    {
                        this.state.categories.map((result, index) => {
                            return (
                                <div key={index} className="shop-product-list">
                                    <h2 id="ctitle">{result.cname}</h2>
                                    <div className="grid">
                                        {
                                            this.state.products.map((product, indx) => {
                                                if (product.cid == result.cid) {
                                                    return (
                                                        <div key={indx} className="col-4 hide">
                                                            <Link to={`/product?pid=${product.pid}&cid=${product.cid}`}><img src={`../images/${product.iname}`} className="pimage" alt="" /></Link>
                                                            <h4>{product.pname}</h4>
                                                            <p>RS.{product.price}</p>
                                                        </div>
                                                    )
                                                }

                                            })
                                        }

                                    </div>
                                    <div className="btn-container">
                                    <button className="view-btn"><Link to={`/category/${result.cid}`}>view more</Link></button>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            )
                        })

                    }

                </div>
            </>
        )
    }
}