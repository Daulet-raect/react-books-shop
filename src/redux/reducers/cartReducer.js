const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const CLEAR_CART = "CLEAR_CART"
const DELETE_LAST = "DELETE_LAST"

const initialState = {
    books: [],
    totalPrice: 0,
    totalCount: 0,
    lastItemIndex: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                books: [...state.books, action.book],
                totalPrice: state.totalPrice += action.book.price.value,
                totalCount: state.totalCount + 1,
                lastItemIndex: action.index
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                books: state.books.filter(book => book.itemId !== action.book.itemId),
                totalPrice: state.totalPrice -= action.book.price,
                totalCount: state.totalCount - 1,
                lastItemIndex: state.lastItemIndex - 1,
            }
        }
        case CLEAR_CART: {
            return {
                ...state,
                books: [],
                totalPrice: 0,
                totalCount: 0,
                lastItemIndex: 0
            }
        }

        case DELETE_LAST: {
            return {
                ...state,
                totalPrice: state.totalPrice - state.books[state.books.length - 1].price.value,
                books: state.books.slice(0, -1),
                lastItemIndex: state.lastItemIndex - 1,
                totalCount: state.totalCount - 1
            }
        }
        default: return state
    }
}

export const addToCart = (book, index) => ({type: ADD_TO_CART, book, index})
export const removeFromCart = (book) => ({type: REMOVE_FROM_CART, book})
export const clearCart = () => ({type: CLEAR_CART})
export const deleteLast = () => ({type: DELETE_LAST})


export default cartReducer
