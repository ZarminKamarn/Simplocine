import { Link } from "react-router";
import type { ListMoviesSingleResult } from "../../tmpTypes";
import "./banner.css";

interface BannerProps {
  movie: ListMoviesSingleResult;
}

export function Banner({ movie }: BannerProps) {
  return (
    <section className="banner-section">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        className="banner-img"
      />
      <div className="banner-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <Link to={`/movies/${movie.id}`} className="banner-link">
          Voir
        </Link>
      </div>
    </section>
  );
}
