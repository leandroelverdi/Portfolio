import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={`mt-auto flex h-16 items-center justify-center ${isDarkMode ? "bg-stone-950 text-white" : "bg-gray-200"}`}>
      Cv de Leandro Elverdi
    </footer>
  );
};
