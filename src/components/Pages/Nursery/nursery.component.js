import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScreenSize from '../../common/ScreenResize/screenResize.component';
import './nursery.component.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

let source;

export const Nursery = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        source = axios.CancelToken.source();
        getNursery();

        return (() => {
            if (source) {
                source.cancel("Nursery Component got unmounted");
            }
        })
    }, [])


    function getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`, {
            cancelToken: source.token
        })
            .then(res => {
                setState(res.data)
            }).catch((e) => {
                console.log(e.message);
            })
    }

    return (
        <>
            <h2 className="title">Partner Nursery</h2>
            {
                state.map((result, index) => {
                    let nurseryContent =
                        <>
                            <div className="nurserycard">
                                <h1>{result.name}</h1>
                                <p>
                                    {result.description}
                                </p>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i> {result.address}<br /><i className="fas fa-at"></i> {result.nur_email}<br /><i className="fas fa-mobile-alt"></i> {result.phone}
                                    <Link to={`/nursery/${result.nid}`}><br /><br />
                                        <button style={{ cursor: 'pointer' }}>view Details</button></Link>
                                </p>
                            </div>

                        </>
                    let nurseryImage =
                        <>
                            <div className="nurseryimage"> <img src={`../images/${result.iname}`} /></div>
                        </>

                    return (index % 2 == 0) ? (
                        <div key={index} className="nursery">
                            {
                                nurseryContent
                            }
                            {
                                nurseryImage
                            }
                        </div>
                    )
                        :

                        (<div key={index} className="nursery">
                            {
                                nurseryImage
                            }
                            {
                                nurseryContent
                            }
                        </div>)

                }

                )

            }

        </>
    )
}
