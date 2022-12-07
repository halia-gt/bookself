export type ReadingBook = {
    id: number,
    book_id: number,
    title: string,
    author: string,
    image: string,
    format: string,
};

export type NextReadsTBR = {
    id: number | undefined,
    image: string | undefined,
};

export type Purchases = {
    id: number,
    book_id: number,
    title: string,
    author: string,
    image: string,
    price: number,
    format: string,
    store: string,
    month: number
}