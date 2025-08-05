// import asal dari internet/hasil installasi
// import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// importan asal dari local
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link>Saya adalah element yang dibuat dengan react!</Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        {/* root itu semacam home/beranda */}
        <Route path="/details/:id" element={<Details />} />
        {/* /details/:id pet */}
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root"); // <div id="root"></div>
const root = createRoot(container); // ReactDOM.createRoot("pada lokasi div dengan id root.")
root.render(<App />); // nge-render component App
