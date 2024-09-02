const URL_PATH_API = "https://api.themoviedb.org/3";
const URL_SECTION_MOVIES = "https://api.themoviedb.org/3/movie/";
const API_KEY = "f5283af760ac82370edbc58a2e5fd4a2";
const LANGUAGE = "language=es"

export const SECTIONS_MOVIES = {
  nowPlaying: {
    title: 'Lo más nuevo',
    urlApi: `${URL_SECTION_MOVIES}now_playing?api_key=${API_KEY}&${LANGUAGE}`
  },

  topRated: {
    title: 'Recomendados',
    urlApi: `${URL_SECTION_MOVIES}top_rated?api_key=${API_KEY}&${LANGUAGE}`
  },

  popularMovies: {
    title: 'Populares',
    urlApi: `${URL_SECTION_MOVIES}popular?api_key=${API_KEY}&${LANGUAGE}`
  }
}

/* ruta raiz para c/imagen de pelicula */
export const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

/* GET GENRES */
// Movies
export const URL_GET_GENRES = `${URL_PATH_API}/genre/movie/list?api_key=${API_KEY}&${LANGUAGE}`
// TV
export const URL_ENABLES_GENRES = (type) => `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=es-ES`


export const URL_MOVIES_BY_GENRE = (id) => `https://api.themoviedb.org/3/genre/${id}/movies?api_key=${API_KEY}&${LANGUAGE}`

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Accept-Language': 'es-ES'
  }
};


export function URL_FILTER_SERIES({ year, genre, rating }) {
  if (year === "todos" && genre !== "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&vote_average.gte=${rating}`
  }
  if (year !== "todos" && genre === "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&first_air_date_year=${year}&vote_average.gte=${rating}`
  }
  if (year !== "todos" && genre !== "todos" && rating === '10') {
    return `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&first_air_date_year=${year}`
  }
  if (year !== "todos" && genre !== "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&first_air_date_year=${year}&vote_average.gte=${rating}`
  }
}


export function URL_FILTER_MOVIES({ year, genre, rating }) {
  if (year === "todos" && genre !== "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&vote_average.gte=${rating}`
  }
  if (year !== "todos" && genre === "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&primary_release_year=${year}&vote_average.gte=${rating}`
  }
  if (year !== "todos" && genre !== "todos" && rating === '10') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&primary_release_year=${year}`
  }
  if (year !== "todos" && genre !== "todos" && rating !== '10') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${rating}`
  }
}