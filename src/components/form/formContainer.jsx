import Form from "./form";
import {connect} from "react-redux";
import {clearCart, deleteLast} from "../../redux/reducers/cartReducer";
import {searchBook, sortBooks} from "../../redux/reducers/booksReducer";

const FormContainer = connect(null, {clearCart, sortBooks, deleteLast, searchBook})(Form)

export default FormContainer
