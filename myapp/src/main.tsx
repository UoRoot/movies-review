import { createRoot } from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/search/search-context-provider.js";
import { GlobalConfigProvider } from "./context/global-config/global-config-provider.js";

createRoot(document.getElementById("root") as Element).render(
  <GlobalConfigProvider>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </GlobalConfigProvider>
);
