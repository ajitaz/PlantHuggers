import axios from 'axios';
import React, { Component } from 'react';
import './article.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Article extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
        this.getArticle();
    }

    getArticle() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewArticle`)
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
    }

    render() {
        return (
            <>
                <div className="small-container">
                    <h2 className="title">Articles</h2>
                    <div className="article-container">
                        {
                            this.state.articles.map((article, index) => {
                                return (
                                    <article key={index} className="article-card">
                                        <div className="article-image">
                                            <img src={`../images/${article.iname}`} alt="" />
                                        </div>
                                        <div className="article-content">
                                            <a href="#" className="card-category">{article.cname}</a>
                                            <h3 className="card-title">{article.title}</h3>
                                            <p className="card-desc">{article.a_description}</p>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}