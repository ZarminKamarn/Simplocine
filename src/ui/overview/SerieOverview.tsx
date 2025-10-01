import type { SerieDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import "./overview.css";

interface SerieOverviewProps {
  series: SerieDetails;
}

export function SerieOverview({ series }: SerieOverviewProps) {
  return (
    <section className="overview-section">
      <Image
        src={`https://image.tmdb.org/t/p/w200/${series.poster_path}`}
        alt={`poster de ${series.name}`}
        origin="overview"
      />
      <div className="overview-column">
        <p className="overview-info">Nom original: {series.original_name}</p>
        <p className="overview-info">
          Genres:{" "}
          {series.genres.map((genre) => {
            return `${genre.name}, `;
          })}
        </p>
        <p className="overview-info">
          Créé par:{" "}
          {series.created_by.map((creator) => {
            return `${creator.name}, `;
          })}
        </p>
      </div>
      <div className="overview-column">
        <p className="overview-info">
          Pays d'origine: {series.origin_country.toString()}
        </p>
        <p className="overview-info">
          {series.number_of_seasons} saisons et {series.number_of_episodes}{" "}
          épisodes
        </p>
        <p className="overview-info">
          Date du premier épisode: {series.first_air_date}
        </p>
        {series.episode_run_time.length > 0 && (
          <p className="overview-info">
            Durée d'un épisode: {series.episode_run_time} minutes
          </p>
        )}
      </div>
    </section>
  );
}
