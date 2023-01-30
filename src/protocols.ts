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
    publication_date: Date,
    subgenre_id: number,
    title: string,
    average_rating: string,
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

export type Year = {
    id: number,
    year: number,
    reading_goal: number,
}

export type MonthlyDataType = {
    month: number,
    books: number,
    pages: number,
    minutes: number,
};

export type BookStats = {
    label: string,
    count: number,
};

type AuthorsBook = {
    id: number,
    book_id: number,
    author_id: number,
    authors: {
        id: number,
        name: string,
        identity: string,
        country_id: number,
    }
};

type Genre = {
    id: number,
    name: string,
}

type SeriesBook = {
    id: number,
    book_id: number,
    order: number,
    series_end: boolean,
    series_id: 24,
};

type Series = {
    id: number,
    name: string,
    publish_status: string,
    total_number_of_books: number,
};

type Owned = {
    id: number,
    acquired: string,
    book_format: string,
    book_id: number,
};

type TopBook = {
    id: number,
    book_id: number,
    position: number,
    year_id: number,
};

export type BookRead = {
    id: number,
    acquired: string,
    author_status: string,
    book_format: string,
    book_language: string,
    book_id: number,
    date_finished: Date,
    date_started: Date,
    minutes: number | null,
    rating: string,
    books: Book & {
        authors_book: AuthorsBook[],
        genres: Genre,
        subgenre: Genre,
        owned: Owned[] | null,
        series_books: (SeriesBook & { series: Series })[] | null,
        books: TopBook[] | null,
    },
};