export type ReadingBook = {
    id: number,
    author_id: number,
    authors: Author,
    book_id: number,
    books: Book,
};

export type Author = {
    id: number,
    country_id: number,
    identity: string,
    name: string,
};

export type Book = {
    id: number,
    classic: boolean,
    audience_id: number,
    genre_id: number,
    image: string,
    pages: number,
    publication_date: string,
    subgenre_id: number,
    title: string,
};

export type NextReadsTBR = {
    id: number | undefined,
    book_id: number | undefined,
    books: Book | undefined,
    priority: boolean,
};

export type Purchases = {
    id: number,
    book_id: number,
    books: Book & {
        authors_books: {
            authors: Author,
        }[],
    },
    date: string,
    format: string,
    price: number,
    store: string,
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