import type { MovieDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import "./detailsSection.css";
import { MovieSectionContent } from "./MovieSectionContent";

interface MovieSectionProps {
  movie: MovieDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function MovieSection({
  movie,
  isLoading,
  isError,
  errorMessage,
}: MovieSectionProps) {
  return (
    <section className="details-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (movie && <MovieSectionContent movie={movie} />)}
    </section>
  );
}
