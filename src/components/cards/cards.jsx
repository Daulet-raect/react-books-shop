import React from 'react';
import Card from "../card/card";
import style from "./cards.module.css"

const Cards = ({books, addToCart, totalPrice}) => {
    debugger
    return (
        <div className={style.cards}>
            {books && books.map((book, index) => <Card inCart={true} totalPrice={totalPrice} book={book}
                                              addToCart={addToCart} id={index} title={book.title}/>)}
        </div>
    );
};

export default Cards;
