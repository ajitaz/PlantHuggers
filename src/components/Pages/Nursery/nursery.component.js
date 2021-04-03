import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nursery.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export class Nursery extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.getNursery();
    }

    getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        return (
            <>
                <h2 className="title">Partner Nursery</h2>
                {
                    this.state.data.map((result, index) => {
                        return (
                            <div key={index} className="nurseryimage" style={{
                                backgroundImage: `linear-gradient(140deg, #ffffffe6 50%, transparent 50%),url(../images/${result.iname})`
                            }}>
                                <div className="nurserycard">
                                    <h1>{result.name}</h1>
                                    <p>
                                        {result.description}
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i> {result.address}<br /><i className="fas fa-mobile-alt"></i> {result.phone}
                                        <Link to={`/nursery/${result.nid}`}><br /><br />
                                            <button style={{ cursor: 'pointer' }}>view Details</button></Link>
                                    </p>
                                </div>
                            </div>
                        )
                    })

                }

            </>
        )
    }
}