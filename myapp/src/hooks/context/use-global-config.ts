import { useContext } from "react";
import { GlobalConfigContext } from "../../context/global-config/global-config-context";

export const useGlobalConfig = () => {
  const context = useContext(GlobalConfigContext);
  if (!context) {
    throw new Error(
      "useGlobalConfig must be used within a GlobalConfigProvider"
    );
  }
  return context;
};
