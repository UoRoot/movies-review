import { ChangeEvent, FormEvent, useState } from "react";
import SearchIcon from "../../icons/search-icon";
import { useNavigate } from "react-router-dom";
import Style from "./search-form.module.css";

export function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [typingError, setTypingError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate("/buscar/" + query.split(" ").join("-"));
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery === "") {
      setTypingError("");
      return;
    }

    if (newQuery.match(/^\d+$/)) {
      setTypingError("la busqueda no puede ser un numero");
      return;
    }

    if (newQuery.length < 3) {
      setTypingError("la busqueda debe tener al menos 3 caracteres");
      return;
    }

    setTypingError("");
  }

  return (
    <>
      <form
        className={Style.searchForm}
        onSubmit={handleSubmit}
        style={{
          borderColor: typingError ? "red" : "",
        }}
      >
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="Search..."
          name="query"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
