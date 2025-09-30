import type { SerieDetails } from "../../tmpTypes";
import "./detailsSection.css";

interface SeriesProps {
  series: SerieDetails;
}

export function Series({ series }: SeriesProps) {
  return (
    <section className="details-section">
      <img
        src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
        alt={`image de ${series.name}`}
        className="details-img"
      />
      <div className="details-info">
        <h2 className="details-title">{series.name}</h2>
        <p className="details-description">{series.overview}</p>
        <p>{series.number_of_seasons} saisons</p>
        <p>Note: {series.vote_average}/10</p>
      </div>
    </section>
  );
}
