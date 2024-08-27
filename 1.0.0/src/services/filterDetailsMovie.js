import { IMAGE_PATH } from "../Consts"

export function filterDetailsMovie({details}) {

  const title = details.title
  const date = details.release_date
  const year = date.split("-")[0]
  const voteAverage = Number(details.vote_average).toFixed(1)
  const redoundedVoteAverage = voteAverage % 1 === 0 ? Math.floor(voteAverage) : voteAverage

  const voteCount = details.vote_count
  const duration = details.runtime
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
    duration,
    genres,
    image,
    overview
  }

  return { infoDetails }
}