import { Link } from "react-router";
import "./card.css";

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

export function Card({ imageSrc, title, link }: CardProps) {
  return (
    <Link to={link} className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <p>{title}</p>
    </Link>
  );
}
