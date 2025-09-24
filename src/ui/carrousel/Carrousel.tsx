import { useEffect } from "react";
import { Card } from "../card/Card";
import "./carrousel.css";

interface CarrouselProps<T> {
  page: "movies" | "series";
  data: Array<T>;
}

export function Carrousel<T>({ page }: CarrouselProps<T>) {
  useEffect(() => {});
  const data = [
    "Titre 1",
    "Titre 2",
    "Titre 3",
    "Titre 4",
    "Titre 5",
    "Titre 6",
    "Titre 7",
    "Titre 8",
    "Titre 9",
    "Titre 10",
    "Titre 11",
    "Titre 12",
  ];
  useEffect(() => {});

  return (
    <ul className="carousel">
      {data.map((item, index) => {
        return (
          <li className="carousel-item">
            <Card
              imageSrc="https://placehold.co/600x400"
              link={`/${page}/${index}`}
              title={item}
            />
          </li>
        );
      })}
    </ul>
  );
}
