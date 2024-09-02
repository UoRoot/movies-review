import { createRoot } from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/search/search-context-provider.js";
import { SearchMovieProvider } from "./context/search/search-movie-context-provider.js";

createRoot(document.getElementById("root") as Element).render(
  <BrowserRouter>
    <SearchProvider>
      <SearchMovieProvider>
        <App />
      </SearchMovieProvider>
    </SearchProvider>
  </BrowserRouter>
);
