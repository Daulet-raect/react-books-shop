import React from 'react';
import style from "./form.module.css"
import {useState} from "react";

const Form = ({clearCart, sortBooks, deleteLast, searchBook}) => {
    const [value, setValue] = useState("")
    const searchBookHandler = () => searchBook(value)


    return (
            <div className={style.form}>
                <div className={style.leftBtns}>
                    <button onClick={clearCart} className={style.btn}>Clear cart</button>
                    <button onClick={deleteLast} className={style.btn}>Delete last</button>
                </div>
                <input value={value} onChange={(e) => setValue(e.target.value)}
                       placeholder="Search..." type="text" className={style.input}/>
                <div className={style.rightBtns}>
                    <button onClick={searchBookHandler} className={style.btn}>Search</button>
                    <button onClick={sortBooks} className={style.btn}>Sort</button>
                </div>
            </div>
       );
};

export default Form;
