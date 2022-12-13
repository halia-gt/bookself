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
    month: number,
}

export type StatsMain = {
    year: number,
    total_books_read: number,
    total_pages_read: number,
    total_hours_listened: HoursListened,
    reading_goal: number,
    total_books_owned: number,
    owned_books_read: number,
    average_days_to_read: number,
    average_rating: number,
    favorite_book: string,
    most_pages: number,
    least_pages: number,
};

export type HoursListened = {
    hours: number,
    minutes: number,
};