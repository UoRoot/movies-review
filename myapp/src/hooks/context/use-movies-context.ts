import { useContext } from "react";
import { MoviesContext } from "../../context/movies/movies-context";

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a MoviesProvider");
  }
  return context;
};
