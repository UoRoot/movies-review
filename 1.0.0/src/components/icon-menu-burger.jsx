import '../styles/icon-menu-burger.css'

export function IconMenuBurger({ handleMenu, menuBurgerActive }) {
  return (
    <div onClick={handleMenu} className={`menu-icon-burger ${menuBurgerActive ? 'equis' : 'rev-animation'}`}>
      <div className="bar-1 bar-x-1"></div>
      <div className="bar-2 bar-x-2"></div>
      <div className="bar-3"></div>
    </div>
  )
}