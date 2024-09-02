import { useContext } from "react";
import { SearchMovieContext } from "../../context/search/search-movie-context-provider";

export const useSearchMovieContext = () => {
  const context = useContext(SearchMovieContext);
  if (!context) {
    throw new Error(
      "useSearchMovieContext must be used within a SearchMovieProvider"
    );
  }
  return context;
};
