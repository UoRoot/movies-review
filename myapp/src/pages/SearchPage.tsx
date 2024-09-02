import "../styles/SearchPage.css";
import { FindMovies } from "../components/FindMovies";
import { useParams } from "react-router-dom";

export function SearchPage() {
  const { query } = useParams() as { query: string };
  if (!query) return <h1>Ingresa el nombre de una película o serie</h1>;
  return (
    <main className="st-search">
      <FindMovies query={query} />
      {/* <FindMovies items={mappedSeries} type='Series' search={query} /> */}
    </main>
  );
}
