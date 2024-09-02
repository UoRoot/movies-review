import { createContext } from "react";
import { ReactNode, useState } from "react";

// Define la estructura del contexto
export interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  typingError: string;
  setTypingError: (menssage: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode | ReactNode[];
}

export function SearchProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [typingError, setTypingError] = useState("");

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        typingError,
        setTypingError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
