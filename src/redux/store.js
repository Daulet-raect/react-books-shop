import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import cartReducer from "./reducers/cartReducer";
import thunkMiddleware from "redux-thunk";
import booksReducer from "./reducers/booksReducer";

const reducers = combineReducers({
    cart: cartReducer,
    books: booksReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store
