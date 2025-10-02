import type { SerieDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import "./overview.css";
import { SerieOverviewContent } from "./SerieOverviewContent";

interface SerieOverviewProps {
  series: SerieDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function SerieOverview({
  series,
  errorMessage,
  isError,
  isLoading,
}: SerieOverviewProps) {
  return (
    <section className="overview-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (series && <SerieOverviewContent series={series} />)}
    </section>
  );
}
