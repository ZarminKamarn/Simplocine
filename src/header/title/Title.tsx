import logo from "../../assets/logo.png";
import "./title.css";

export function Title () {
    return(
        <a href="/" className="title">
            <img src={logo} alt="Logo" className="title-logo" />
            <h1 className="title-text">Simplo'ciné</h1>
        </a>
    );
}