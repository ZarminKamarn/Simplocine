import type { ListCasting, PersonSingleMovie } from "../../tmpTypes";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";
import "./carouselSection.css";

interface PersonMovieCarrouselSectionProps {
  title?: string;
  data: ListCasting<PersonSingleMovie> | undefined;
}

export function PersonMovieCarrouselSection({
  title,
  data,
}: PersonMovieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <h2>{title}</h2>}
      {data && data.cast && <MovieCarrousel data={data.cast} />}
    </section>
  );
}
