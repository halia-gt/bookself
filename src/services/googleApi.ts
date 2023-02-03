import axios from "axios";

function searchBookGoogle(book: string) {
    const encoded = encodeURI(book);
    const url = `${process.env.REACT_APP_GOOGLE_API_BASE_URL}/volumes?q=${encoded}&langRestrict=en&maxResults=12&orderBy=relevance&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const promise = axios.get(url);
    return promise;
}

export {
    searchBookGoogle,
};