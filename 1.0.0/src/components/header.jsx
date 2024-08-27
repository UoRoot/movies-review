import { IconMenuBurger } from "./icon-menu-burger"
import { useMenuByWindowSize } from "../hooks/useMenuByWindowSize"
import { SearchForm } from "./searchForm"
import { Link, NavLink } from 'react-router-dom'

export function Header({ search, handleSubmit, handleChange, error}) {
  const { handleMenu, menuBurgerActive, setMenuBurgerActive } = useMenuByWindowSize()

  return (
    <header className='hd-moviesReview'>
      <Link to='/' className="hd-moviesReview-title" >MoviesReview</Link>

      <IconMenuBurger menuBurgerActive={menuBurgerActive} handleMenu={handleMenu} />

      <section className={`hd-moviesReview-menu ${menuBurgerActive ? 'active' : ''}`}>
        <nav className="hd-moviesReview-menu-nav">
          <NavLink to='/' className={({  isActive}) => (isActive ? 'link-active' : '')} onClick={() => setMenuBurgerActive(false)}>Inicio</NavLink>
          <NavLink to='/peliculas' className={({ isActive }) => (isActive ? 'link-active' : '')} onClick={() => setMenuBurgerActive(false)} >Películas</NavLink>
          <NavLink to='/series' className={({ isActive }) => (isActive ? 'link-active' : '')} onClick={() => setMenuBurgerActive(false)} >Series</NavLink>
          <NavLink to='/estrenos' className={({ isActive }) => (isActive ? 'link-active' : '')} onClick={() => setMenuBurgerActive(false)} >Estrenos</NavLink>
          <NavLink to='/sobre-nosotros' className={({ isActive }) => (isActive ? 'link-active' : '')} onClick={() => setMenuBurgerActive(false)} >About</NavLink>
        </nav>
      </section>

      <section className='hd-moviesReview-container'>
        <nav className='hd-moviesReview-container-nav'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'link-active' : '')}>Inicio</NavLink>
          <NavLink to='/peliculas' className={({ isActive }) => (isActive ? 'link-active' : '')}>Películas</NavLink>
          <NavLink to='/series' className={({ isActive }) => (isActive ? 'link-active' : '')}>Series</NavLink>
          <NavLink to='/estrenos' className={({ isActive }) => (isActive ? 'link-active' : '')}>Estrenos</NavLink>
          <NavLink to='/sobre-nosotros' className={({ isActive }) => (isActive ? 'link-active' : '')}>About</NavLink>
        </nav>
      </section>

      <SearchForm search={search} handleChange={handleChange} handleSubmit={handleSubmit} error={error} />

    </header>
  )
}