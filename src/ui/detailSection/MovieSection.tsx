import type { MovieDetails } from "../../tmpTypes";
import "./destailsSection.css";

interface MovieSectionProps {
  movie: MovieDetails;
}

export function MovieSection({ movie }: MovieSectionProps) {
  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        className="details-img"
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Note: {movie.vote_average}/10</p>
    </section>
  );
}
