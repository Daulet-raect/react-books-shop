import React from 'react';
import {connect} from "react-redux";
import Cart from "./cart";
import {removeFromCart} from "../../redux/reducers/cartReducer";

const mapStateToProps = (state) => ({
    books: state.cart.books,
    totalPrice: state.cart.totalPrice,
})

const CartContainer = connect(mapStateToProps, {removeFromCart})(Cart)

export default CartContainer;
