import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (value: string): void => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
