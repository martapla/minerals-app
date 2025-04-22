import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext'; 
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="link-btns">
        <Link to="/">Home</Link> 
        <Link to="/cart">Cart</Link>
      </div>
      <div className="nav-btns">
        <button onClick={() => switchLanguage("en")}> 🇬🇧 </button>
        <button onClick={() => switchLanguage("es")}> 🇪🇸 </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? "★ Dark" : "☀️ Light"}
        </button>{" "}
      </div>
    </nav>
  );
};

export default Navbar;