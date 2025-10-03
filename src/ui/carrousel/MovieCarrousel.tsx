import { Card } from "../card/Card";
import "./carrousel.css";
import type { Movie } from "../../core/types";
import { useState } from "react";
import { Button } from "../button/Button";

interface MovieCarrouselProps {
  data: Array<Movie>;
}

export function MovieCarrousel({ data }: MovieCarrouselProps) {
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
                link={`/movies/${item.id}`}
                title={item.title}
              />
            </li>
          );
        })}
        {data.slice(0, position).map((item) => {
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
      <Button
        name=">"
        usage={"carousel-slider"}
        onClick={() => incrementCarouselPosition()}
      />
    </div>
  );
}
