// import asal dari internet/hasil installasi
// import React from "react";
import { createRoot } from "react-dom/client";

// importan asal dari local
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Saya adalah element yang dibuat dengan react!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root"); // <div id="root"></div>
const root = createRoot(container); // ReactDOM.createRoot("pada lokasi div dengan id root.")
root.render(<App />); // nge-render component App
