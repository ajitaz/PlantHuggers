import axios from 'axios';
import React, { Component } from 'react';
import './indArticle.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class IndArticle extends Component {
    constructor() {
        super();
        this.state = {
            article: []
        }
        this.getArticle();
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
                {/* <div className="bgimg-1" style={{ backgroundImage: `url("../images/${this.state.article.iname}")` }}>
                </div> */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center',flexDirection:'column' }}>
                    <h3 style={{ marginTop: '20px' }} >{this.state.article.title}</h3>
                    <img style={{ height: "600px", margin: '20px 150px' }} src={`../images/${this.state.article.iname}`} alt='Not found'></img>
                </div>
                <div className="cont">

                    <p style={{fontSize:18}}>{this.state.article.a_description}</p>
                </div>
            </>
        )
    }
}