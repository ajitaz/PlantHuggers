import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './partnerNursery.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export class Nursery extends Component {

    constructor() {
        super();
        this.state = {
            nurseries: []
        }
        source = axios.CancelToken.source()
        this.getNursery();
    }

    getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`, {
            cancelToken: source.token
        })
            .then(res => {
                this.setState({
                    nurseries: res.data
                })
            })
            .catch((e) => {
                console.log(e.message)
            })
    }
    componentWillUnmount() {
        if (source) {
            source.cancel("PartnerNursery got Unmounted")
        }
    }


    render() {
        return (
            <>
                <h2 className="title">Partner Nursery</h2>
                <div className="categories">
                    <div className="grid-view">
                        {
                            this.state.nurseries.map((nursery, index) => {
                                return (
                                    <div key={index} className="image">
                                        <Link to={`/nursery/${nursery.nid}`} > <img src={`/images/${nursery.iname}`} alt="" /> </Link>
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h2>{nursery.name}</h2>
                                                <p><i className="fas fa-map-marker-alt"></i> {nursery.address}</p>
                                                <p><i className="fas fa-mobile-alt"></i> {nursery.phone}</p>
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