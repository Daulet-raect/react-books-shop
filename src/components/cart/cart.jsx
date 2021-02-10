import React from 'react';
import Card from "../card/card";
import style from "./cart.module.css"

const Cart = ({books, totalPrice, removeFromCart}) => {
    debugger
    return (
        <>
            <h2 className={style.totalPrice}>Total price: {totalPrice}€</h2>
            <div className={style.line}></div>
            <div className={style.cart}>
                {books && books.map((book) => <Card removeFromCart={removeFromCart} inCart={false} book={book} id={book.itemId}/>)}
            </div>
        </>
    );
};

export default Cart;
