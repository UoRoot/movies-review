import { useEffect, useState } from 'react'
import { URL_MOVIES_BY_GENRE } from '../Consts'

function mapGenresToCounts(genres, counts) {
  return genres.map((genre, index) => ({
    id: genre.id,
    name: genre.name,
    count: counts[index]
  }));
}

export function useGenres({ url }) {
  const [mappedGenres, setMappedGenres] = useState(null);

  useEffect(() => {
    async function fetchGenresAndMovies() {
      const response = await fetch(url);
      const data = await response.json();

      const genreFetches = data.genres.map((genre) =>
        fetch(URL_MOVIES_BY_GENRE(genre.id))
      );

      const responses = await Promise.all(genreFetches);
      const moviesGenre = await Promise.all(responses.map((response) => response.json()));
      const moviesCount = moviesGenre.map((data) => data.total_results);

      // Map the genres to the movie counts.
      const newMappedGenres = mapGenresToCounts(data.genres, moviesCount);

      // Set the mapped genres state.
      setMappedGenres(newMappedGenres);
    }

    fetchGenresAndMovies();
  }, []);


  return { mappedGenres };
}