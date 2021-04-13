import { ADD_TO_CART, ADD_TO_FRESHCART, CLEAR_FRESH_CART, REMOVE_FROM_CART, SET_ORDER_COUNT } from "../Actions/Order/type"



function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('freshCart')
        if (serializedState == null) return []
        return JSON.parse(serializedState)

    } catch (e) {
        console.log(e)
        return []
    }
}

let freshCart = loadFromLocalStorage()
const initialState = {
    orderCount: 0,
    cart: [],
    freshCart: freshCart
}



export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_COUNT:
            return {
                ...state,
                orderCount: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        case ADD_TO_FRESHCART:
            return {
                ...state,
                freshCart: [...state.freshCart, action.payload]
            }
        case REMOVE_FROM_CART:
            const { freshCart } = state
            freshCart.forEach((item, index) => {
                if (index === action.payload) {
                    freshCart.splice(index, 1)
                }
            })
            return {
                ...state,
                freshCart: [...freshCart]
            }
        case CLEAR_FRESH_CART:
            return {
                ...state,
                freshCart: []
            }

        default:
            return {
                ...state
            }
    }
}