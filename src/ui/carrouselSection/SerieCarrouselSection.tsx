import type { ListElement, Series } from "../../tmpTypes";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface SerieCarrouselSectionProps {
  title?: string;
  data: ListElement<Series> | undefined;
}

export function SerieCarrouselSection({
  title,
  data,
}: SerieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="banner" text={title} />}
      {data && data.results && <SerieCarrousel data={data.results} />}
    </section>
  );
}
