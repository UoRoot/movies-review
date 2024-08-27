import { IMAGE_PATH } from "../Consts"

export function filterDetailsSerie({details}) {

  const title = details.name
  const date = details.first_air_date
  const year = date.split("-")[0]
  const voteAverage = Number(details.vote_average).toFixed(1)
  const redoundedVoteAverage = voteAverage % 1 === 0 ? Math.floor(voteAverage) : voteAverage

  const voteCount = details.vote_count
  const seasons = details.seasons.length
  const genres = details.genres.map(genre => genre.name).join(', ')

  const image = `${IMAGE_PATH}${details.poster_path}`
  const overview = details.overview

  const infoDetails = {
    title,
    date,
    year,
    voteAverage,
    redoundedVoteAverage,
    voteCount,
    seasons,
    genres,
    image,
    overview
  }

  return { infoDetails }
}