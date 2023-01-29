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

export {
    getReadingBooks,
    getPriorityTBR,
    getLastThreePurchases,
    getMainStats,
    getYearList,
    getMonthlyStats,
    getFormatsStats,
};