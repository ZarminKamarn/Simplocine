import { Link } from "react-router";
import "./navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/movies" className="navbar-link">
        Les films
      </Link>
      <Link to="/series" className="navbar-link">
        Les séries
      </Link>
    </nav>
  );
}
