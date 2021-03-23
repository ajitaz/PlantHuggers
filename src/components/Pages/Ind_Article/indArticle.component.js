import axios from 'axios';
import React, { Component } from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './indArticle.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class IndArticle extends Component {
    constructor() {
        super();
        this.state = {
            article: []
        }
        this.getArticle();
        window.scrollTo(0, 0);
    }

    getArticle() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewArticle`)
            .then(res => {
                res.data.map((article, index) => {
                    if (article.aid == this.props.match.params.aid) {
                        this.setState({
                            article: article
                        })

                    }
                })
            })
    }

    render() {
        return (
            <>
                <NavBar />


                <div className="bgimg-1" style={{ backgroundImage: `url("../images/${this.state.article.iname}")` }}>
                </div>
                <div className="cont">
                    <h3>{this.state.article.title}</h3>
                    <p>{this.state.article.a_description}</p>
                </div>


                    )


                <Footer />
            </>
        )
    }
}