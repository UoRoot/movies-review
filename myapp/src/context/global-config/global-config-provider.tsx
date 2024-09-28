import { ReactNode, useEffect, useState } from "react";
import { GlobalConfigContext } from "./global-config-context";

export function GlobalConfigProvider({ children }: { children: ReactNode }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el event listener
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 1024;

  return (
    <GlobalConfigContext.Provider value={{ isDesktop }}>
      {children}
    </GlobalConfigContext.Provider>
  );
}
