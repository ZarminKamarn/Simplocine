import type { MovieDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import { MovieOverviewContent } from "./MovieOverviewContent";
import "./overview.css";

interface MovieOverviewProps {
  movie: MovieDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function MovieOverview({
  movie,
  isLoading,
  isError,
  errorMessage,
}: MovieOverviewProps) {
  return (
    <section className="overview-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (movie && <MovieOverviewContent movie={movie} />)}
    </section>
  );
}
