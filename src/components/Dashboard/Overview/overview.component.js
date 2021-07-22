import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './overview.component.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;
let source;

export const Overview = (props) => {

    const [state, setState] = useState({
        userCount: '',
        productCount: '',
        nurseryCount: '',
        orderCount: '',
        nurseryProductCount: '',
        nurseryArticleCount: '',
        nurseryName: ''
    })

    useEffect(() => {
        source = axios.CancelToken.source()
        if (!props.isNurseryDashboard) {
            getCountAdmin();
        } else {
            getCountNursery();
        }

        return (() => {
            if (source) {
                source.cancel("Dashboard Overview got Unmounted")
            }
        })
    }, [])

    const getCountNursery = () => {
        let uid = localStorage.getItem('uid')
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewProduct&uid=${uid}`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryProductCount: res.data.length
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewOrder&uid=${uid}`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    orderCount: res.data.length,
                    nurseryName: res.data.reduce((acc, current) => {
                        return current.name
                    })
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewArticle&uid=${uid}`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryArticleCount: res.data.length
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });
    }



    function getCountAdmin() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewUser`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    userCount: res.data.length
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });

        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    productCount: res.data.length
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });

        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`, {
            cancelToken: source.token
        })
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryCount: res.data.length
                }))
            })
            .catch((e) => {
                console.log(e.message)
            });
    }
    

    let content = props.isNurseryDashboard
        ? <>
            <h2 className="dash-title">{state.nurseryName}</h2>
            <div className="dash-cards">
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fas fa-shopping-cart"></i>
                        <div>
                            <h5>Products</h5>
                            <h4>{state.nurseryProductCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="/nurseryDashboard/product">View All</Link>
                    </div>
                </div>
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fas fa-plus-circle"></i>
                        <div>
                            <h5>Article</h5>
                            <h4>{state.nurseryArticleCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="nurseryDashboard/viewArticle">View All</Link>
                    </div>
                </div>
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fa fa-cart-arrow-down"></i>
                        <div>
                            <h5>Orders</h5>
                            <h4>{state.orderCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="/nurseryDashboard/order">View All</Link>
                    </div>
                </div>
            </div>
        </>
        : <>
            <h2 className="dash-title">Overview</h2>
            <div className="dash-cards">
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fas fa-home"></i>
                        <div>
                            <h5>Users</h5>
                            <h4>{state.userCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="/dashboard/user">View All</Link>
                    </div>
                </div>
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fas fa-shopping-cart"></i>
                        <div>
                            <h5>Products</h5>
                            <h4>{state.productCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="/dashboard/viewProduct">View All</Link>
                    </div>
                </div>
                <div className="Dcard-single">
                    <div className="Dcard-body">
                        <i className="fas fa-hand-holding-seedling"></i>
                        <div>
                            <h5>Nursery</h5>
                            <h4>{state.nurseryCount}</h4>
                        </div>
                    </div>
                    <div className="Dcard-footer">
                        <Link to="/dashboard/ViewNursery">View All</Link>
                    </div>
                </div>
            </div>
        </>
    return (
        <>
            <main>
                {content}
            </main>
        </>
    )
}