import { useState } from "react";
import { yearsfilter } from "../services/yearsFilter.js"

const FilterForm = ({handleSubmit, genres}) => {
  const { years } = yearsfilter()
  const [rating, setRating] = useState(10)

  return (
    <form className="formFilter" onSubmit={e => handleSubmit(e)}>
      <h2 className="form-title">Filtrar Películas</h2>
      <label htmlFor="genre" className="form-flex">
        <strong>Género:</strong>
        <select id="genre" name="genre" className="options">
          <option value="todos">Todos</option>
          {
            genres?.map(genre => <option key={genre.id} value={`${genre.id}`} className="option">{genre.name}</option>)
          }
        </select>
      </label>

      <label htmlFor="year" className="form-flex">
        <strong>Año:</strong>
        <select id="year" name="year" className="options">
          <option value="todos">Todos</option>
          {
            years.map(year => <option key={year} value={`${year}`} className="option">{year}</option>)
          }
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
        <button type="submit" className="button">Filtrar</button>
      </div>
    </form>
  );
};

export default FilterForm;
