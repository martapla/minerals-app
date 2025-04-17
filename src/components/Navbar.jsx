import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext'; 
import { useContext } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;