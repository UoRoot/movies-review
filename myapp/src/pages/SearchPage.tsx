import "../styles/SearchPage.css";
import { FindMovies } from "../components/find-movies";
import { useParams } from "react-router-dom";
import { FindSeries } from "../components/find-series";

export function SearchPage() {
  const { query } = useParams() as { query: string };
  if (!query) return <h1>Ingresa el nombre de una película o serie</h1>;
  return (
    <main className="st-search">
      <FindMovies query={query} />
      <FindSeries query={query} />
    </main>
  );
}
