export function SectionLinks({ genres, title }) {
  if (!genres) return <p>Loading data...</p>
  return (
    <>
      <h3 className="st-entertainment-links-title">{title}</h3>
      <aside className="content-list">
        {genres.map(genre => (
          <a href="./" key={genre.id}>
            {/* {console.log("genero: " + genre.name, genre.id)} */}
            <span>{genre.name}</span>
            <span>{genre.count}</span>
          </a>
        ))}
      </aside>
    </>
  )
}