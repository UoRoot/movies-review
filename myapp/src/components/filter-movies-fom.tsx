import { FormEvent, MutableRefObject, useEffect, useState } from "react";
import { yearsfilter } from "../services/yearsFilter.ts";
import { useMoviesContext } from "../hooks/context/use-movies-context.ts";
import { getAllGenres } from "../services/getAllGenres.ts";
import { GenreType } from "../types/api-responses/genres";

type FormParams = { year: string; rating: string };
const FilterForm = ({
  isFiltering,
}: {
  isFiltering: MutableRefObject<boolean>;
}) => {
  const { years } = yearsfilter();
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState<GenreType[]>([]);
  const { setFilters } = useMoviesContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { year, rating: ratingForm } = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as FormParams;

    console.log();
    if (!isFiltering.current) {
      isFiltering.current = true;
    }

    setFilters((prev) => ({
      ...prev,
      year,
      rating: Number(ratingForm),
    }));
  };

  useEffect(() => {
    (async () => {
      const allGenres = await getAllGenres("movie");
      setGenres(allGenres);
    })();
  }, []);

  return (
    <form className="formFilter" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form-title">Filtrar Películas</h2>
      <label htmlFor="genre" className="form-flex">
        <strong>Género:</strong>
        <select id="genre" name="genre" className="options">
          <option value="todos">Todos</option>
          {genres?.map((genre) => (
            <option key={genre.id} value={`${genre.id}`} className="option">
              {genre.name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="year" className="form-flex">
        <strong>Año:</strong>
        <select id="year" name="year" className="options">
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={`${year}`} className="option">
              {year}
            </option>
          ))}
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
