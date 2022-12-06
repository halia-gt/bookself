import axios from "axios";

function getReadingBooks() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/books/reading`);
    return promise;
}

export {
    getReadingBooks,
};