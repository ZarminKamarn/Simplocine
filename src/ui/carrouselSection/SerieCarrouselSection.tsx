import type { ListSeries } from "../../tmpTypes";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";
import "./carouselSection.css";

interface SerieCarrouselSectionProps {
  title: string;
  data: ListSeries | undefined;
}

export function SerieCarrouselSection({
  title,
  data,
}: SerieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      <h2>{title}</h2>
      {data && data.results && <SerieCarrousel data={data.results} />}
    </section>
  );
}
