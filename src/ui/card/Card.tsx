import { Link } from "react-router";

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

export function Card({ imageSrc, title, link }: CardProps) {
  return (
    <Link to={link}>
      <img src={imageSrc} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
