import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './categoryPage.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class CategoryPage extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.getCategory();
        window.scrollTo(0, 0);

    }

    getCategory() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }


    render() {
        return (
            <>
                {
                    this.state.data.map((category, index) => {
                        return (
                            <div key={index}>
                                <div className="bgimg-1" style={{ backgroundImage: `url("../images/${category.iname}")` }} />
                                <div className="cont">
                                    <h3>{category.cname}</h3>
                                    <p>{category.description}</p>
                                    <Link to={`/category/${category.cid}`}> <button>View Products</button></Link>
                                </div>
                            </div>
                        )
                    })

                }
            </>
        )
    }

}
