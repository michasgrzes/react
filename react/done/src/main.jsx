import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import "./components/Characters";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Episodes from "./components/Episodes";

function Navigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/characters">Przejdź do czarakders</Link>
                    </li>
                    <li>
                        <Link to="/locations">Przejdź do lokejszon</Link>
                    </li>
                    <li>
                        <Link to="/episodes">Przejdź do epizoud</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/characters" element={<Characters />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);