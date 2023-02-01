import axios from "axios";

function getReadingBooks() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/books/reading`);
    return promise;
}

function getPriorityTBR() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tbr/priority`);
    return promise;
}

function getLastThreePurchases() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/purchases/last`);
    return promise;
}

function getMainStats(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/main/${year}`);
    return promise;
}

function getYearList() {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/years`);
    return promise;
}

function getMonthlyStats(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/months/${year}`);
    return promise;
}

function getFormatsStats(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/formats/${year}`);
    return promise;
}

function getStarStats(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/stars/${year}`);
    return promise;
}

function getGenreStats(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/stats/genres/${year}`);
    return promise;
}

function getBooksRead(year: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/books/read/${year}`);
    return promise;
}

function getBookById(bookId: number) {
    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/books/${bookId}`);
    return promise;
}

function postBookRead(bookId: number, body: {
    rating: number,
    date_finished: string,
}) {
    const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/books/${bookId}`, body);
    return promise;
}

export {
    getReadingBooks,
    getPriorityTBR,
    getLastThreePurchases,
    getMainStats,
    getYearList,
    getMonthlyStats,
    getFormatsStats,
    getStarStats,
    getGenreStats,
    getBooksRead,
    getBookById,
    postBookRead,
};