import type { ListMovies } from "../../tmpTypes";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";
import "./carouselSection.css";

interface MovieCarrouselSectionProps {
  title: string;
  data: ListMovies | undefined;
}

export function MovieCarrouselSection({
  title,
  data,
}: MovieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      <h2>{title}</h2>
      {data && data.results && <MovieCarrousel data={data.results} />}
    </section>
  );
}
