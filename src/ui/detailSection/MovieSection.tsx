import type { MovieDetails } from "../../tmpTypes";
import "./detailsSection.css";

interface MovieSectionProps {
  movie: MovieDetails;
}

export function MovieSection({ movie }: MovieSectionProps) {
  return (
    <section className="details-section">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        className="details-img"
      />
      <div className="details-info">
        <h2 className="details-title">{movie.title}</h2>
        <p className="details-description">{movie.overview}</p>
        <p>Note: {movie.vote_average}/10</p>
      </div>
    </section>
  );
}
