import {booksAPI} from "../../API";

const SEARCH_BOOK = "SEARCH_BOOK"
const SORT_BOOKS = "SORT_BOOKS"
const SET_BOOKS = "SET_BOOKS"

const initialState = {
    books: null
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BOOKS: {
            return {
                ...state,
                books: state.books.sort((a, b) => a.price.value > b.price.value ? 1 : -1).slice()
            }
        }
        case SET_BOOKS: {
            return {
                ...state,
                books: action.books
            }
        }

        case SEARCH_BOOK: {
            const findBook = state.books.find(book => {
                if (book.title === action.name) return book; return null
            })
            debugger
            if (findBook && state.books.map(book => book.title === action.name )) return {
                ...state,
                books: [findBook]
            }
            return {...state, books: null}
        }
        default:
            return state
    }
}

export const searchBook = (name) => ({type: SEARCH_BOOK, name})
export const sortBooks = () => ({type: SORT_BOOKS})
const setBooks = (books) => ({type: SET_BOOKS, books})

export const getBooks = () => async (dispatch) => {
    const data = await booksAPI.getBooks()
    dispatch(setBooks(data))
}

export default booksReducer

