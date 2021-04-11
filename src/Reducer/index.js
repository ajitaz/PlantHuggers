import { combineReducers } from 'redux';
import { orderReducer } from './order.red';

export default combineReducers({
    order: orderReducer
})
