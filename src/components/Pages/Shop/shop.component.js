import React, { Component } from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import { Link } from 'react-router-dom';
import './shop.component.css';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Shop extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            products: []
        }
    }

    getCategories() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`)
            .then(res => {
                this.setState({
                    categories: res.data
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

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }


    render() {
        return (
            <>
                <NavBar />
                <div className="small-container">
                    <h2 className="title">All Products</h2>
                    {
                        this.state.categories.map((result, index) => {
                            return (
                                <div key={index} className="product-list">
                                    <h2>{result.cname}</h2>
                                    <div className="grid">
                                        {
                                            this.state.products.map((product, indx) => {
                                                if (product.cid == result.cid) {
                                                    return (
                                                        <div className="col-4">
                                                            <Link to={`/product/${product.pname}`}><img src={`../images/${product.iname}`} alt="" /></Link>
                                                            <h4>{product.pname}</h4>
                                                            <p>{product.price}</p>
                                                        </div>
                                                    )
                                                }

                                            })
                                        }

                                    </div>
                                    <button><Link to={`/category/${result.cname}`}>view more</Link></button>
                                    <div className="clear"></div>
                                </div>
                            )
                        })

                    }

                </div>
                <Footer />
            </>
        )
    }
}