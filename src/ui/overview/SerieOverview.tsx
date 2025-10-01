import type { SerieDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
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
      <div>
        <Paragraph
          type="overview-info"
          text={`Nom original: ${series.original_name}`}
        />
        <Paragraph
          type="overview-info"
          text={`Genres: ${series.genres.map((genre) => {
            return `${genre.name}`;
          })}`}
        />
        <Paragraph
          type="overview-info"
          text={`Créé par: ${series.created_by.map((creator) => {
            return `${creator.name}`;
          })}`}
        />
      </div>
      <div>
        <Paragraph
          type="overview-info"
          text={`Pays d'origine: ${series.origin_country.toString()}`}
        />
        <Paragraph
          type="overview-info"
          text={`${series.number_of_seasons} saisons et ${series.number_of_episodes} épisodes`}
        />
        <Paragraph
          type="overview-info"
          text={`Date du premier épisode: ${series.first_air_date}`}
        />
        {series.episode_run_time.length > 0 && (
          <Paragraph
            type="overview-info"
            text={`Durée d'un épisode: ${series.episode_run_time} minutes`}
          />
        )}
      </div>
    </section>
  );
}
