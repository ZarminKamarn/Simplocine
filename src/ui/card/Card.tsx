import { Link } from "react-router";
import "./card.css";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

export function Card({ imageSrc, title, link }: CardProps) {
  return (
    <Link to={link} className="card">
      <Image alt={`Poster de ${title}`} src={imageSrc} origin="card" />
      <Paragraph text={title} />
    </Link>
  );
}
