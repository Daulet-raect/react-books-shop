import axios from "axios";

export const booksAPI = {
    getBooks() {
        return axios.get(`http://private-44008-bookstore.apiary-mock.com/data/books`)
            .then(response => response.data)
    }
}
