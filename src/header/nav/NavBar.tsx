import "./navbar.css";

export function NavBar() {
    return(
        <nav className="navbar">
            <a href="/movies" className="navbar-link">Les films</a>
            <a href="/series" className="navbar-link">Les séries</a>
        </nav>
    )
}