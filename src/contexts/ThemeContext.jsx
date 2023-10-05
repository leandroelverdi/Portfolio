import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextUpdate = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
