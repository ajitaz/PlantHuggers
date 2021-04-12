import axios from "axios"
import { SET_ORDER_PRODUCT, SET_ORDER_COUNT, ADD_TO_CART, ADD_TO_FRESHCART } from "./type"
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

export const add_to_cart_ac = (params) => (dispatch) => {
    dispatch({
        type: SET_ORDER_PRODUCT,
        payload: params.data
    })
}

export const add_to_freshcart_ac = (params) => (dispatch) => {
    dispatch({
        type: ADD_TO_FRESHCART,
        payload: params
    })
}

