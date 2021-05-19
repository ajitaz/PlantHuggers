import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './article.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class Article extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
        source = axios.CancelToken.source()
        this.getArticle();
    }

    getArticle() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewArticle`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    componentWillUnmount() {
        if (source) {
            source.cancel("SectionArticel got Unmounted")
        }
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
                                    <article key={index} className="article-card hide-4">
                                        <Link to={`/indArticle/${article.aid}`}>
                                            <div className="article-image">
                                                <img src={`../images/${article.iname}`} alt="" />
                                            </div>
                                            <div className="article-content">
                                                <h4>{article.cname}</h4>
                                                <h3 className="card-title">{article.title}</h3>
                                                <p className="card-desc">{article.a_description}</p>
                                            </div>
                                        </Link>
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