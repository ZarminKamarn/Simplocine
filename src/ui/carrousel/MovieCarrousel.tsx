import { Card } from "../card/Card";
import "./carrousel.css";
import type { Movie } from "../../core/types";

interface MovieCarrouselProps {
  data: Array<Movie>;
}

export function MovieCarrousel({ data }: MovieCarrouselProps) {
  return (
    <ul className="carousel">
      {data.map((item) => {
        return (
          <li className="carousel-item" key={item.id}>
            <Card
              imageSrc={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              link={`/movies/${item.id}`}
              title={item.title}
            />
          </li>
        );
      })}
    </ul>
  );
}
