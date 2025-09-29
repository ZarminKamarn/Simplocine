import type { MovieDetails } from "../../tmpTypes";

interface MovieSectionProps {
  movie: MovieDetails;
}

export function MovieSection({ movie }: MovieSectionProps) {
  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        className="banner-img"
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Score {movie.popularity}/100</p>
    </section>
  );
}
