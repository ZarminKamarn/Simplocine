import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import "./title.css";
import { Image } from "../../image/Image";

export function Title() {
  return (
    <Link to="/" className="title">
      <Image src={logo} alt="Logo" origin="title" />
      <h1 className="title-text">Simplo'ciné</h1>
    </Link>
  );
}
