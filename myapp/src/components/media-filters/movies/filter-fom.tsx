import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { getAllGenres } from "../../../services/getAllGenres";
import { GenreType } from "../../../types/api-responses/genres";
import Style from "./filter-form.module.css";
import { useNavigate } from "react-router-dom";

export function FilterForm() {
  const navigate = useNavigate();
  const [rating, setRating] = useState("7");
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      const allGenres = await getAllGenres("movie");
      setGenres(allGenres);
    })();
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const ratingForm = formData.get("rating") as string;
      const year = formData.get("year") as string;
      const selectedGenres = formData.getAll("genres") as string[];

      const params = new URLSearchParams();
      if (rating !== "") params.append("rating", ratingForm);
      if (year !== "" && year !== "all") params.append("year", year);
      if (selectedGenres.length > 0)
        params.append("with_genres", selectedGenres.join(" "));
      navigate(`/movies?${params.toString()}`);
    },
    [rating, navigate]
  );

  const renderedGenres = useMemo(
    () =>
      genres.map(({ id, name }) => (
        <span key={id}>
          <input id={id.toString()} type="checkbox" name="genres" value={id} />
          <label htmlFor={id.toString()}>{name}</label>
        </span>
      )),
    [genres]
  );

  return (
    <form className={Style.formFilter} onSubmit={handleSubmit}>
      <h2>Filtrar Películas</h2>
      <div className={Style.genres}>
        <strong>Géneros:</strong>
        <div>{renderedGenres}</div>
      </div>

      <div className={Style.years}>
        <label>
          <strong>Año:</strong>
          <input
            id="yearInput"
            type="number"
            min="1970"
            max={new Date().getFullYear()}
            name="year"
            placeholder="1970..."
          />
        </label>
      </div>

      <div className={Style.rating}>
        <strong>Calificación mínima:</strong>
        <div>
          <input
            type="range"
            id="rating"
            name="rating"
            min="0.0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <span className="rating-value">{rating}</span>
        </div>
      </div>
      <div className="ct-center">
        <button type="submit" className="button">
          Filtrar
        </button>
      </div>
    </form>
  );
}
