import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchForm } from "../forms/search-form";
import { useGlobalConfig } from "../../../hooks/context/use-global-config";
import Style from "./header.module.css";
import BurgerMenuButton from "../buttons/burger-menu.tsx/burger-menu";

function NavbarDesktop() {
  return (
    <>
      <nav className={Style.navbarDesktop}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "link-active" : "")}
        >
          Películas
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

      <SearchForm />
    </>
  );
}

function NavbarMovile() {
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);

  return (
    <>
      <BurgerMenuButton onClick={() => setIsActiveNavbar((prev) => !prev)} />
      <nav className={Style.navbarMovile}>
        <div>
          <SearchForm />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Películas
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
        </div>
      </nav>
    </>
  );
}

export default function Header() {
  const { isDesktop } = useGlobalConfig();
  return (
    <header className={Style.header}>
      <Link to="/" className={Style.title}>
        MoviesReview
      </Link>
      {isDesktop ? <NavbarDesktop /> : <NavbarMovile />}
    </header>
  );
}
