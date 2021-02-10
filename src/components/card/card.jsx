import React from 'react';
import style from "./card.module.css"
import img from "../../assets/img.jfif"

const Card = ({addToCart, id, book, inCart, removeFromCart}) => {

    const kitcut = (text, limit) => {
        text = text.trim();
        if( text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    }

    return (
        <div className={style.card}>
            <img src={book.image} width="250px" alt="Avatar"/>
            <div className={style.description}>
                <h2 className={style.title}>{book.title}</h2>
                {kitcut(book.summary, 150)}
            </div>
                <div className={style.container}>
                    <h4 className={style.price}><b>{book.price.displayValue}€</b></h4>
                    <p>{inCart ?
                        <button onClick={() => addToCart(book, id)} className={style.btn}>Add to cart</button>
                        : <button onClick={() => removeFromCart(book)} className={style.btnRemove}>Remove from cart</button>}</p>
                </div>
        </div>
    );
};

export default Card;
