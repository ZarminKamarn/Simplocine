import type { SerieDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import "./detailsSection.css";
import { SeriesSectionContent } from "./SeriesSectionContent";

interface SeriesProps {
  series: SerieDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function SeriesSection({
  series,
  isLoading,
  isError,
  errorMessage,
}: SeriesProps) {
  return (
    <section className="details-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (series && <SeriesSectionContent series={series} />)}
    </section>
  );
}
