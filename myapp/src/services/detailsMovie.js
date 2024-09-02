export function detailsMovie({ details }) {

  const infoMovie = details ? {
    title: details.title,
    overview: details.overview,
    genres: details.genres
  } : false

  return { infoMovie }
}