import { createContext } from "react";
import { ReactNode, useState } from "react";
import { MovieType } from "../../types/api-responses/list-media";
import { MediaCard } from "../../types/local-type/media";
import { toListMediaCard } from "../../mappers/movie-mapper";

// Define la estructura del contexto
export interface SearchMovieContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  movies: MediaCard[];
  setMovies: (movies: MovieType[]) => void;
}

export const SearchMovieContext = createContext<
  SearchMovieContextType | undefined
>(undefined);

interface Props {
  children: ReactNode | ReactNode[];
}

export function SearchMovieProvider({ children }: Props) {
  const [movies, setMovies] = useState<MediaCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setMappedMovies = (movies: MovieType[]) => {
    setMovies(toListMediaCard(movies));
  };

  return (
    <SearchMovieContext.Provider
      value={{
        movies,
        isLoading,
        setIsLoading,
        setMovies: setMappedMovies,
      }}
    >
      {children}
    </SearchMovieContext.Provider>
  );
}
