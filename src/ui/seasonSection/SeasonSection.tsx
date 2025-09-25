import type { Season } from "../../tmpTypes";

interface SeasonSectionProps {
  seasons: Array<Season>;
}

export function SeasonSection({ seasons }: SeasonSectionProps) {
  return (
    <section>
      {seasons.map((season) => {
        return (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${season.poster_path}`}
              alt={`Affiche saison ${season.season_number}`}
            />
            <div>
              <h3>{season.name}</h3>
              <p>{season.overview}</p>
              <p>{season.episode_count} épisodes</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
