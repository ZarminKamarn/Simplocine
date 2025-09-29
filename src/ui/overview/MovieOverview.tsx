import type { MovieDetails } from "../../tmpTypes";

interface MovieOverviewProps {
  movie: MovieDetails;
}

export function MovieOverview({ movie }: MovieOverviewProps) {
  return (
    <section>
      <div>
        <p>Nom original: {movie.original_title}</p>
        <p>
          Genres:{" "}
          {movie.genres.map((genre) => {
            return `${genre.name}, `;
          })}
        </p>
        <p>Pays d'origine: {movie.origin_country.toString()}</p>
      </div>
      <div>
        <p>Date de sortie: {movie.release_date}</p>
        <p>Durée: {movie.runtime}</p>
        <p>Budget: {movie.budget}</p>
      </div>
    </section>
  );
}
