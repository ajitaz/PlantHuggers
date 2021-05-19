import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './category.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class Category extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
        source = axios.CancelToken.source()
    }

    getCategory() {
        axios.get(`${BASE_URL}/viewContent.php?option=category`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    componentDidMount() {
        this.getCategory();
    }

    componentWillUnmount() {
        if (source) {
            source.cancel("SectionCategory got Unmounted")
        }
    }

    render() {
        return (
            <>
                <h2 className="title">Categories</h2>
                <div className="Categories">
                    <div className="grid-view">
                        {
                            this.state.data.map((result, index) => {
                                return (
                                    <div key={index} className="Cimage">
                                        <h1>{result.cname}</h1>
                                        <img src={`../images/${result.iname}`} alt="" />
                                        <div className="Coverlay">
                                            <div className="Coverlay-content">
                                                <h2>{result.cname}<i className="fas fa-info-circle"></i></h2>
                                                <p>{result.description}</p>
                                                <Link to={`/category/${result.cid}`}> <button>view more</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </>
        )

    }
}

