import { useEffect, useState } from 'react'

export function useMenuByWindowSize() {
  const [menuBurgerActive, setMenuBurgerActive] = useState(false)

  function handleMenu() {
    if (menuBurgerActive) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }

    setMenuBurgerActive(!menuBurgerActive)
  }

  function handleWindowResize() {
    if (window.innerWidth > 860) {
      setMenuBurgerActive(false) //formatea el parametro que activa el menu hamburguesa
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { menuBurgerActive, handleMenu, setMenuBurgerActive }
}