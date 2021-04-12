import { ADD_TO_CART, ADD_TO_FRESHCART, SET_ORDER_COUNT, SET_ORDER_PRODUCT } from "../Actions/Order/type"

const initialState = {
    orderCount: 0,
    cart: [],
    freshCart: []
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
                freshCart: action.payload
            }

        case ADD_TO_FRESHCART:
            return {
                ...state,
                freshCart: [...state.freshCart, action.payload]
            }

        default:
            return {
                ...state
            }
    }
}