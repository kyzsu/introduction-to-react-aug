// import asal dari internet/hasil installasi
// import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// importan asal dari local
// import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const AdoptedPet = useState(null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={AdoptedPet}>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link>Saya adalah element yang dibuat dengan react!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            {/* root itu semacam home/beranda */}
            <Route path="/details/:id" element={<Details />} />
            {/* /details/:id pet */}
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root"); // <div id="root"></div>
const root = createRoot(container); // ReactDOM.createRoot("pada lokasi div dengan id root.")
root.render(<App />); // nge-render component App
