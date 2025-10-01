import type { MovieDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
import "./overview.css";

interface MovieOverviewProps {
  movie: MovieDetails;
}

export function MovieOverview({ movie }: MovieOverviewProps) {
  return (
    <section className="overview-section">
      <Image
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={`poster de ${movie.title}`}
        origin="overview"
      />
      <div>
        <Paragraph
          type="overview-info"
          text={`Nom original: ${movie.original_title}`}
        />
        <Paragraph
          type="overview-info"
          text={`Genres: 
          ${movie.genres.map((genre) => {
            return `${genre.name}, `;
          })}`}
        />
        <Paragraph
          type="overview-info"
          text={`Pays d'origine: ${movie.origin_country.toString()}`}
        />
      </div>
      <div>
        <Paragraph
          type="overview-info"
          text={`Date de sortie: ${movie.release_date}`}
        />
        <Paragraph
          type="overview-info"
          text={`Durée: ${movie.runtime} minutes`}
        />
        <Paragraph type="overview-info" text={`Budget: ${movie.budget}`} />
      </div>
    </section>
  );
}
