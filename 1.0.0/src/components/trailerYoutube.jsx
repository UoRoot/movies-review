import YouTube from 'react-youtube'

export function TrailerYoutube({ trailer }) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <aside className='video-container'>
      {trailer ? <YouTube videoId={trailer} opts={opts} className='video-trailer' /> : <h3>Esta pelicula no tiene trailer</h3>}
    </aside>
  )
}