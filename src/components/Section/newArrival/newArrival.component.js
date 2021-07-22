import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './newArrival.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export const NewArrival = () => {

    const [state, setState] = useState([])


    const getPopularProducts = () => {
        axios.get(`${BASE_URL}/viewContent.php?option=viewPopularProducts`, {
            cancelToken: source.token
        })
            .then(res => {
                setState(res.data)
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    useEffect(() => {
        source = axios.CancelToken.source()
        getPopularProducts()
        return(()=>{
            if (source) {
                source.cancel("Popular products got Unmounted")
            }
        })
    }, [])


    return (
        <>
            <div className="featured">
                <h2 className="title">Popular Products</h2>
                <div className="small-container">
                    <div className="row">
                        {
                            state.map((product, index) => {
                                return (
                                    <div key={index} className="col-3 hide-4">
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