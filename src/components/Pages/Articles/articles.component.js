import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './articles.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class Articles extends Component {
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
                console.log(e.message);
            })
    }

    componentWillUnmount(){
        if(source){
            source.cancel("Article Component got Unmounted")
        }
    }

    render() {
        return (
            <>
                <div className="events">
                    <ul>
                        {
                            this.state.articles.map((article, index) => {
                                return (
                                    <li key={index}>
                                        <img src={`../images/${article.iname}`} alt="" />
                                        <div className="details">
                                            <Link to={`/category/${article.cid}`} className="card-category">{article.cname}</Link>
                                            <h2>{article.title}</h2>
                                            <p>{article.a_description}</p>
                                            <Link to={`/indArticle/${article.aid}`} className="Abtn">view more</Link>
                                        </div>
                                        <div className="clear"></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
}