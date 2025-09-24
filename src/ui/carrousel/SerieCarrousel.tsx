import { Card } from "../card/Card";
import "./carrousel.css";
import type { ListSerieSingleResult } from "../../tmpTypes";

interface SerieCarrouselProps {
  data: Array<ListSerieSingleResult>;
}

export function SerieCarrousel({ data }: SerieCarrouselProps) {
  return (
    <ul className="carousel">
      {data.map((item) => {
        return (
          <li className="carousel-item">
            <Card
              imageSrc={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              link={`/series/${item.id}`}
              title={item.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
