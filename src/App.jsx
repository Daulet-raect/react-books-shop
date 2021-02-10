import React from 'react';
import Header from "./components/header/header";
import {Route} from "react-router-dom";
import CardsContainer from "./components/cards/cardsContainer";
import style from "./App.module.css"
import CartContainer from "./components/cart/cartContainer";
import FormContainer from "./components/form/formContainer";
import {getBooks} from "./redux/reducers/booksReducer";
import {connect} from "react-redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        return (
            <>
                <Header/>

                <Route path="/" exact render={() => <><FormContainer/>
                    <div className={style.line}></div>
                    <CardsContainer/></>}/>
                <Route path="/cart" render={() => <CartContainer/>}/>
            </>
        );
    }
}

const AppContainer = connect(null, {getBooks})(App);

export default AppContainer
