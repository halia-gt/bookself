import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Home from "./pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />
            </Routes>
        </BrowserRouter>
    );
}