import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';


const middlewares = [thunk]

const initalState = {}
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('freshCart', serializedState)
    } catch (e) {
        console.log(e)
    }
}


export const store = createStore(rootReducer, initalState, applyMiddleware(...middlewares))

store.subscribe(() => saveToLocalStorage(store.getState().order.freshCart))