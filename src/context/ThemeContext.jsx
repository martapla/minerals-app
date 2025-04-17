import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};
export { ThemeContext };
