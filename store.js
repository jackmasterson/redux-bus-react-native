import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import counter from './reducers/counter';

const enhancer = compose(
    applyMiddleware(
        reduxThunkMiddleware
    )
)

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers({ counter }),
        initialState,
        enhancer
    )
    return store
}
