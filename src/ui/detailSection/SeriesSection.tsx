import type { SerieDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import { TitleH2 } from "../title/TitleH2";
import "./detailsSection.css";

interface SeriesProps {
  series: SerieDetails;
}

export function Series({ series }: SeriesProps) {
  return (
    <section className="details-section">
      <Image
        src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
        alt={`image de ${series.name}`}
        origin="banner"
      />
      <div className="details-info">
        <TitleH2 origin="banner" text={series.name} />
        <p className="details-description">{series.overview}</p>
        <p>{series.number_of_seasons} saisons</p>
        <p>Note: {series.vote_average}/10</p>
      </div>
    </section>
  );
}
