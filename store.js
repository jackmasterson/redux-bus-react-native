import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import data from './reducers/counter';
import {logger} from 'redux-logger';

const enhancer = compose(
    applyMiddleware(
        reduxThunkMiddleware,
        logger
    )
)

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers({ data }),
        enhancer
    )
    return store
}
