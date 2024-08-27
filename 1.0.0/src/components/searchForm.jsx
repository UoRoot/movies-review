export function SearchForm({ search, handleSubmit, handleChange, error }) {

  return (
    <>
      <form className='hd-moviesReview-search' onSubmit={handleSubmit} style={{
        borderColor: error ? 'red' : ''
      }}>
        <input onChange={handleChange} value={search} type="text" placeholder="Search..." name="query" />
        <button className="searchMovies" type="submit"><i className='fa-solid fa-magnifying-glass'></i></button>
      </form>
    </>
  )
}