import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './newArrival.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const NewArrival = () => {

    const [state, setState] = useState([])


    const getNewArrival = () => {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNewArrival`)
            .then(res => {
                setState(res.data)
            })
    }

    useEffect(() => {
        getNewArrival()
        console.log(state)
    }, [])
    return (
        <>
            <div className="featured">
                <h2 className="title">New Arrivals</h2>
                <div className="small-container">
                    <div className="row">
                        {
                            state.map((product,index) => {
                                return (
                                    <div key={index} className="col-3">
                                        <Link to={`/product?pid=${product.pid}&cid=${product.cid}`}><img src={`../images/${product.iname}`} alt="" /></Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}