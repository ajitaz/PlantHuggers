import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';


const middlewares = [thunk]

const initalState = {}
export const store = createStore(rootReducer, initalState, applyMiddleware(...middlewares))