import { useMenuByWindowSize } from "../hooks/useMenuByWindowSize.js";
import { Link, NavLink } from "react-router-dom";
import CloseMenuIcon from "./icons/close-menu-icon";
import OpenMenuIcon from "./icons/open-menu-icon";
import { SearchForm } from "./ui/forms/search-form";

export function Header() {
  const { handleMenu, menuBurgerActive, setMenuBurgerActive } =
    useMenuByWindowSize();

  return (
    <header className="hd-moviesReview">
      <Link to="/" className="hd-moviesReview-title">
        MoviesReview
      </Link>

      {/* MOVILE RESPONSIVE  */}
      <button onClick={handleMenu}>
        {menuBurgerActive ? <OpenMenuIcon /> : <CloseMenuIcon />}
      </button>

      <section
        className={`hd-moviesReview-menu ${menuBurgerActive ? "active" : ""}`}
      >
        <nav className="hd-moviesReview-menu-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
            onClick={() => setMenuBurgerActive(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/peliculas"
            className={({ isActive }) => (isActive ? "link-active" : "")}
            onClick={() => setMenuBurgerActive(false)}
          >
            Películas
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) => (isActive ? "link-active" : "")}
            onClick={() => setMenuBurgerActive(false)}
          >
            Series
          </NavLink>
          <NavLink
            to="/estrenos"
            className={({ isActive }) => (isActive ? "link-active" : "")}
            onClick={() => setMenuBurgerActive(false)}
          >
            Estrenos
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) => (isActive ? "link-active" : "")}
            onClick={() => setMenuBurgerActive(false)}
          >
            About
          </NavLink>
        </nav>
      </section>

      <section className="hd-moviesReview-container">
        <nav className="hd-moviesReview-container-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/peliculas"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Películas
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Series
          </NavLink>
          <NavLink
            to="/estrenos"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Estrenos
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            About
          </NavLink>
        </nav>
      </section>

      <SearchForm />
    </header>
  );
}
