import { createContext, Dispatch, SetStateAction } from "react";

const BookContext = createContext<{
    refresh: boolean,
    setRefresh: Dispatch<SetStateAction<boolean>>,
} | null>(null);
export default BookContext;