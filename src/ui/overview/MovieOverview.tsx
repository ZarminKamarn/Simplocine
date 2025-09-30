import type { MovieDetails } from "../../tmpTypes";
import "./overview.css";

interface MovieOverviewProps {
  movie: MovieDetails;
}

export function MovieOverview({ movie }: MovieOverviewProps) {
  return (
    <section className="overview-section">
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={`poster de ${movie.title}`}
        className="overview-img"
      />
      <div>
        <p className="overview-info">Nom original: {movie.original_title}</p>
        <p className="overview-info">
          Genres:{" "}
          {movie.genres.map((genre) => {
            return `${genre.name}, `;
          })}
        </p>
        <p className="overview-info">
          Pays d'origine: {movie.origin_country.toString()}
        </p>
      </div>
      <div>
        <p className="overview-info">Date de sortie: {movie.release_date}</p>
        <p className="overview-info">Durée: {movie.runtime}</p>
        <p className="overview-info">Budget: {movie.budget}</p>
      </div>
    </section>
  );
}
