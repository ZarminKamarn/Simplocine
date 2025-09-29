import type { SerieDetails } from "../../tmpTypes";

interface SerieOverviewProps {
  series: SerieDetails;
}

export function SerieOverview({ series }: SerieOverviewProps) {
  return (
    <section>
      <div>
        <p>Nom original: {series.original_name}</p>
        <p>
          Genres:{" "}
          {series.genres.map((genre) => {
            return `${genre.name}, `;
          })}
        </p>
        <p>
          Créé par:{" "}
          {series.created_by.map((creator) => {
            return `${creator.name}, `;
          })}
        </p>
      </div>
      <div>
        <p>Pays d'origine: {series.origin_country.toString()}</p>
        <p>
          {series.number_of_seasons} saisons et {series.number_of_episodes}{" "}
          épisodes
        </p>
        <p>Date du premier épisode: {series.first_air_date}</p>
        {series.episode_run_time.length > 0 && (
          <p>Durée d'un épisode: {series.episode_run_time} minutes</p>
        )}
      </div>
    </section>
  );
}
