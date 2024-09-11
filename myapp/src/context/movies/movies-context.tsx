import { createContext, Dispatch, SetStateAction } from "react";
import { MovieType } from "../../types/api-responses/list-media";
import { DiscoverMediaParams } from "../../types/local-type/media";

// Define la estructura del contexto
export interface MoviesContextType {
  error?: string;
  isLoading: boolean;
  movies: MovieType[];
  nextPage: () => void;
  prevPage: () => void;
  setFilters: Dispatch<SetStateAction<DiscoverMediaParams>>;
  totalPages: number;
}

export const MoviesContext = createContext<MoviesContextType | undefined>(
  undefined
);
