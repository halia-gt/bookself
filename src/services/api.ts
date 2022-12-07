import axios from "axios";

function getReadingBooks() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/books/reading`);
    return promise;
}

function getPriorityTBR() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tbr/priority`);
    return promise;
}

export {
    getReadingBooks,
    getPriorityTBR,
};