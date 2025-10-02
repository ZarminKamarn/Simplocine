import type { Season } from "../../core/types";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
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
        <Paragraph type="description" text={season.overview} />
        <Paragraph text={`${season.episode_count} épisodes`} />
      </div>
    </>
  );
}
