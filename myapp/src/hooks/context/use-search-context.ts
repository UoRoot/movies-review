import { useContext } from "react";
import { SearchContext } from "../../context/search/search-context-provider";

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
