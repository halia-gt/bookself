import Stats from "pages/Stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Home from "./pages/Home";
import Shelves from "./pages/Shelves";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />
                <Route
                    path="/shelves"
                    element={ <Shelves /> }
                />
                <Route
                    path="/stats"
                    element={ <Stats /> }
                />
            </Routes>
        </BrowserRouter>
    );
}