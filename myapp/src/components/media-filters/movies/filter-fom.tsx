import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yearsfilter } from "../../../services/yearsFilter";
import { getAllGenres } from "../../../services/getAllGenres";
import { GenreType } from "../../../types/api-responses/genres";
import Style from "./filter-form.module.css";

const FilterForm = () => {
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState<GenreType[]>([]);
  const navigate = useNavigate();
  const { years } = useMemo(() => yearsfilter(), []);

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
    [navigate, rating]
  );

  const renderedGenres = useMemo(
    () =>
      genres.map(({ id, name }) => (
        <label key={id}>
          {name}
          <input type="checkbox" name="genres" value={id} />
        </label>
      )),
    [genres]
  );

  const renderedYears = useMemo(
    () =>
      years.map((year) => (
        <option key={year} value={year.toString()}>
          {year}
        </option>
      )),
    [years]
  );

  return (
    <form className={Style.filterForm} onSubmit={(e) => handleSubmit(e)}>
      <h2>Filtrar Películas</h2>
      <div className={Style.genres}>
        <strong>Géneros:</strong>
        <div>{renderedGenres}</div>
      </div>

      <label htmlFor="year" className="form-flex">
        <strong>Año:</strong>
        <select id="year" name="year" className="options">
          <option value="all">Todos</option>
          {renderedYears}
        </select>
      </label>

      <label htmlFor="rating" className="form-block">
        <strong>Calificación mínima:</strong>
        <div>
          <input
            type="range"
            id="rating"
            name="rating"
            min="0.0"
            max="10"
            step="0.1"
            onChange={(event) => setRating(event.target.value)}
          />
          <span className="rating-value">{rating}</span>
        </div>
      </label>
      <div className="btn-form">
        <button type="submit" className="button">
          Filtrar
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
