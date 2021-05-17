import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './overview.component.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const Overview = (props) => {

    const [state, setState] = useState({
        userCount: '',
        productCount: '',
        nurseryCount: '',
        orderCount: '',
        nurseryProductCount: '',
        nurseryArticleCount: ''
    })

    useEffect(() => {
        if (!props.isNurseryDashboard) {
            getCountAdmin();
        } else {
            getCountNursery();
        }
    }, [])

    const getCountNursery = () => {
        let uid = localStorage.getItem('uid')
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewProduct&uid=${uid}`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryProductCount: res.data.length
                }))
            });
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewOrder&uid=${uid}`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    orderCount: res.data.length
                }))
            });
        axios.get(`${BASE_URL}/viewContent.php?option=nurseryViewArticle&uid=${uid}`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryArticleCount: res.data.length
                }))
            });
    }



    function getCountAdmin() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewUser`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    userCount: res.data.length
                }))
            });

        axios.get(`${BASE_URL}/viewContent.php?option=viewProduct`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    productCount: res.data.length
                }))
            });

        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`)
            .then(res => {
                setState((prevState) => ({
                    ...prevState,
                    nurseryCount: res.data.length
                }))
            });
    }

    let content = props.isNurseryDashboard
        ? <>
            <h2 className="dash-title"> Nursery Dashboard Overview</h2>
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