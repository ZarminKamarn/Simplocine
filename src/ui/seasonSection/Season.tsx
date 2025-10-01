import type { Season } from "../../tmpTypes";
import { Image } from "../image/Image";
import "./season.css";

interface SeasonProps {
  season: Season;
}

export function SeasonContent({ season }: SeasonProps) {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w200/${season.poster_path}`}
        alt={`Affiche saison ${season.season_number}`}
        origin="season"
      />
      <div className="season-info">
        <h3>{season.name}</h3>
        <p className="season-description">{season.overview}</p>
        <p>{season.episode_count} épisodes</p>
      </div>
    </>
  );
}
