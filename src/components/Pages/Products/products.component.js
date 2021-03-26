import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './products.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.getProducts();
    }

    getProducts() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                this.setState({
                    products: res.data
                }
                )
            })

    }


    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        const url = new URLSearchParams(this.props.location.search);
        const activePid = url.get('pid')
        const acitveCid = url.get('cid')
        return (
            <>
                <div className="Psmall-container single-product">
                    <div className="head">
                        {
                            this.state.products.map((result, index) => {
                                if (activePid == result.pid) {
                                    return (
                                        <Fragment key={index}>
                                            <div className="col-2 image">
                                                <img src={`/images/${result.iname}`} height="500" />
                                            </div>

                                            <div className="col-2 Pdetails">
                                                <p>{result.cname}</p>
                                                <h1>{result.pname}</h1>
                                                <h4>Rs {result.price}</h4>
                                                {/* <input type="number" value="1" /> */}
                                                <button>Add to Cart</button>
                                                <h3>product Detail</h3>
                                                <p className="pdesc">
                                                    {result.p_description}
                                                </p>
                                            </div>

                                        </Fragment>
                                    )
                                }
                            })
                        }
                    </div>

                    {
                        <div className="Psmall-container">
                            <div className="product-list">
                                <h2>Related Products</h2>
                                <div className="row grid">
                                    {
                                        this.state.products.map((relatedP, index) => {
                                            if (acitveCid == relatedP.cid && activePid != relatedP.pid) {

                                                return (
                                                    <div key={index} className="col-4">
                                                        <Link to={`/product?pid=${relatedP.pid}&cid=${relatedP.cid}`}><img src={`/images/${relatedP.iname}`} alt="" /></Link>
                                                        <h4>{relatedP.pname}</h4>
                                                        <p>Rs.{relatedP.price}</p>
                                                    </div>
                                                )
                                            }
                                        })

                                    }

                                </div>
                            </div>
                        </div>
                    }


                </div>
            </>

        )
    }
}