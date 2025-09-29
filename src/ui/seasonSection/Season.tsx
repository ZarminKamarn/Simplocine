import type { Season } from "../../tmpTypes";

interface SeasonProps {
  season: Season;
}

export function SeasonContent({ season }: SeasonProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w200/${season.poster_path}`}
        alt={`Affiche saison ${season.season_number}`}
      />
      <div>
        <h3>{season.name}</h3>
        <p>{season.overview}</p>
        <p>{season.episode_count} épisodes</p>
      </div>
    </>
  );
}
