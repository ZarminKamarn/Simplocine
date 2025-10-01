import type { ListCasting, PersonSingleSeries } from "../../tmpTypes";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface PersonSerieCarrouselSection {
  title?: string;
  data: ListCasting<PersonSingleSeries> | undefined;
}

export function PersonSerieCarrouselSection({
  title,
  data,
}: PersonSerieCarrouselSection) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="banner" text={title} />}
      {data && data.cast && <SerieCarrousel data={data.cast} />}
    </section>
  );
}
