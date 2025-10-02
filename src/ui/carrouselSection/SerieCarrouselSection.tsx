import type { ListElement, Series } from "../../core/types";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";
import "./carouselSection.css";

interface SerieCarrouselSectionProps {
  title?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
  data: ListElement<Series> | undefined;
}

export function SerieCarrouselSection({
  title,
  data,
  isLoading,
  isError,
  errorMessage,
}: SerieCarrouselSectionProps) {
  return (
    <section className="carousel-section">
      {title && <TitleH2 origin="banner" text={title} />}
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.results && <SerieCarrousel data={data.results} />)}
    </section>
  );
}
