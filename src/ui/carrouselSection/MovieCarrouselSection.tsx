import type { ListMovies } from "../../tmpTypes";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface MovieCarrouselSectionProps {
  title?: string;
  data: ListMovies | undefined;
}

export function MovieCarrouselSection({
  title,
  data,
}: MovieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="section" text={title} />}
      {data && data.results && <MovieCarrousel data={data.results} />}
    </section>
  );
}
