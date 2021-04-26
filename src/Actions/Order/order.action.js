import axios from "axios"
import { SET_ORDER_COUNT, ADD_TO_CART, ADD_TO_FRESHCART, REMOVE_FROM_CART, CLEAR_FRESH_CART } from "./type"
const BASE_URL = process.env.REACT_APP_BASE_URL


export const fetch_orderCount_ac = (params) => (dispatch) => {
    axios.get(`${BASE_URL}/viewContent.php?option=viewOrder`)
        .then(res => {
            dispatch({
                type: SET_ORDER_COUNT,
                payload: res.data.filter((order) => {
                    if (order.id == localStorage.getItem('uid')) {
                        return order
                    }
                }).length
            })
        })
}

function fetchCartItems(dispatch) {
    axios.get(`${BASE_URL}/viewContent.php?option=viewOrder`)
        .then(res => {
            dispatch({
                type: ADD_TO_CART,
                payload: res.data.filter((order) => {
                    if (order.id == localStorage.getItem('uid')) {
                        return order
                    }
                })
            })
        })
}

export const add_to_cart_ac = () => (dispatch) => {
    fetchCartItems(dispatch);
}

export const add_to_freshcart_ac = (params, quantity) => (dispatch) => {
    params.orderQuantity = quantity
    dispatch({
        type: ADD_TO_FRESHCART,
        payload: params
    })
}

export const remove_from_cart_ac = (params) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: params
    })
}


export const clear_fresh_cart_ac = (params) => (dispatch) => {
    dispatch({
        type: CLEAR_FRESH_CART,
    })
}