import type { SerieDetails } from "../../tmpTypes";
import "./destailsSection.css";

interface SeriesProps {
  series: SerieDetails;
}

export function Series({ series }: SeriesProps) {
  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
        alt={`image de ${series.name}`}
        className="details-img"
      />
      <h2>{series.name}</h2>
      <p>{series.overview}</p>
      <p>{series.number_of_seasons} saisons</p>
      <p>Note: {series.vote_average}/10</p>
    </section>
  );
}
