import type { ListCasting, PersonSingleSeries } from "../../core/types";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface PersonSerieCarrouselSection {
  title?: string;
  data: ListCasting<PersonSingleSeries> | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function PersonSerieCarrouselSection({
  title,
  data,
  isLoading,
  isError,
  errorMessage,
}: PersonSerieCarrouselSection) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="banner" text={title} />}
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.cast && <SerieCarrousel data={data.cast} />)}
    </section>
  );
}
