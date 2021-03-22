import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './categoryPage.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class CategoryPage extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.getCategory();

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
                <NavBar />

                {
                    this.state.data.map((category, index) => {
                        console.log(category.iname)
                        return (
                            <div key={index}>
                                <div className="bgimg-1" style={{ backgroundImage: `url("../images/${category.iname}")` }} />
                                <div className="cont">
                                    <h3>{category.cname}</h3>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                        )
                    })

                }

                <Footer />
            </>
        )
    }

}
