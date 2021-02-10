import React from 'react';
import {Link} from "react-router-dom";
import style from "./header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Daulet Books shop</h1>
            <div className={style.navBtns}>
            <Link to="/cart">
                <button className={style.buttons}>Cart</button>
            </Link>
            <Link to="/">
                <button className={style.buttons}>Home</button>
            </Link>
            </div>
        </header>
    );
};

export default Header;
