import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myReducers from './../reducers'

const initialState = {
  city: null,
  cities: {}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  myReducers, initialState, composeEnhancers(applyMiddleware(thunk)))
