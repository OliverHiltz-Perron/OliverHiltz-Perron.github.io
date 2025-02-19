import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <h1>Oliver Hiltz-Perron</h1>
      <nav>
        <Link to="/">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/OliverHiltz-Perron" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </nav>
    </header>
  );
};

export default Navbar; 