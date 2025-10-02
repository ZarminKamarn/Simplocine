import type { ListElement, Movie } from "../../core/types";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface MovieCarrouselSectionProps {
  title?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
  data: ListElement<Movie> | undefined;
}

export function MovieCarrouselSection({
  title,
  data,
  isLoading,
  isError,
  errorMessage,
}: MovieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="section" text={title} />}
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.results && <MovieCarrousel data={data.results} />)}
    </section>
  );
}
