import { ADD_TO_CART, SET_ORDER_COUNT, SET_ORDER_PRODUCT } from "../Actions/Order/type"

const initialState = {
    orderCount: 0,
    cart: []
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_COUNT:
            return {
                ...state,
                orderCount: action.payload
            }
        case SET_ORDER_PRODUCT:
            return {
                ...state,
                cart: action.payload
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }

        default:
            return {
                ...state
            }
    }
}