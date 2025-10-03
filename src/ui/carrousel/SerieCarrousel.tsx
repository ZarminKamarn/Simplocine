import { Card } from "../card/Card";
import "./carrousel.css";
import type { Series } from "../../core/types";
import { useState } from "react";
import { Button } from "../button/Button";

interface SerieCarrouselProps {
  data: Array<Series>;
}

export function SerieCarrousel({ data }: SerieCarrouselProps) {
  const [position, setPosition] = useState<number>(0);

  const incrementCarouselPosition = () => {
    if (position < 20) {
      setPosition(position + 1);
    } else {
      setPosition(1);
    }
  };

  const decrementCarouselPosition = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(19);
    }
  };

  return (
    <div className="full-carousel">
      <Button
        name="<"
        usage={"carousel-slider"}
        onClick={() => decrementCarouselPosition()}
      />
      <ul className="carousel">
        {data.slice(position, data.length).map((item) => {
          return (
            <li className="carousel-item" key={item.id}>
              <Card
                imageSrc={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                link={`/series/${item.id}`}
                title={item.name}
              />
            </li>
          );
        })}
        {data.slice(0, position).map((item) => {
          return (
            <li className="carousel-item" key={item.id}>
              <Card
                imageSrc={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                link={`/series/${item.id}`}
                title={item.name}
              />
            </li>
          );
        })}
      </ul>
      <Button
        name=">"
        usage={"carousel-slider"}
        onClick={() => incrementCarouselPosition()}
      />
    </div>
  );
}
