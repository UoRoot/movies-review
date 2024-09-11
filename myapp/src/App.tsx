import "./App.css";
import "./styles/layout-one.css";
import { Header } from "./components/header.tsx";
import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage.js";
import { HomePage } from "./pages/HomePage.js";
// import { PremieresPage } from "./pages/PremieresPage.jsx";
// import { AboutPage } from "./pages/AboutPage.jsx";
// import { NotFound } from "./components/NotFound.jsx";
// import { SeriesPage } from "./pages/SeriesPage.jsx";
// import { DetailsPageMovie } from "./pages/DetailsPageMovie.jsx";
import { PeliculasPage } from "./pages/PeliculasPage";
import { MoviesProvider } from "./context/movies/movies-context-provider.tsx";
// import { DetailsPageSerie } from "./pages/DetailsPageSerie.jsx";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar/:query" element={<SearchPage />} />
        <Route
          path="/peliculas"
          element={
            <MoviesProvider>
              <PeliculasPage />
            </MoviesProvider>
          }
        />
        {/* <Route path="/series" element={<SeriesPage />} />
        <Route path="/estrenos" element={<PremieresPage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/pelicula/:id/:title" element={<DetailsPageMovie />} />
        <Route path="/tv/:id/:title" element={<DetailsPageSerie />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
}

export default App;
