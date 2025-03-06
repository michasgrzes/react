import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import "./components/Characters";
import Characters from "./components/Characters";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Locations from "./components/Locations";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/characters">Przejdź do czaradters</Link>
          </li>
          <li>
            <Link to="/locations">Przejdź do lokejszon</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
