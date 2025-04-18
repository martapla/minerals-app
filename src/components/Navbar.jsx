import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext'; 
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>{" "}
       Language: <strong>{language}</strong>{" "}
      <button onClick={() => switchLanguage("en")}>EN</button>
      <button onClick={() => switchLanguage("es")}>ES</button>
    </nav>
  );
};

export default Navbar;