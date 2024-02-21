import { useContext } from "react";
import { ThemeContext } from "../context";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return { theme, toggleTheme };
};

export default useTheme;
