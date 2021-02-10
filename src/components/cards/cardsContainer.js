import React from 'react';
import {connect} from "react-redux";
import Cards from "./cards";
import {addToCart} from "../../redux/reducers/cartReducer";

const mapStateToProps = (state) => ({
    books: state.books.books,
})

const CardsContainer = connect(mapStateToProps, {addToCart})(Cards)

export default CardsContainer;
