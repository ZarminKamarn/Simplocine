import type { ListCasting, PersonSingleMovie } from "../../core/types";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";
import { Paragraph } from "../paragraph/Paragraph";
import "./carouselSection.css";

interface PersonMovieCarrouselSectionProps {
  title?: string;
  data: ListCasting<PersonSingleMovie> | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function PersonMovieCarrouselSection({
  title,
  data,
  isLoading,
  isError,
  errorMessage,
}: PersonMovieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <h2>{title}</h2>}
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.cast && <MovieCarrousel data={data.cast} />)}
    </section>
  );
}
