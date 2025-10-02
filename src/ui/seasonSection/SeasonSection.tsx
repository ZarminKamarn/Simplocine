import type { SerieDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import { SeasonContent } from "./Season";
import "./season.css";

interface SeasonSectionProps {
  data: SerieDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function SeasonSection({
  data,
  isLoading,
  isError,
  errorMessage,
}: SeasonSectionProps) {
  return (
    <section className="season-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.seasons && (
          <ul className="casting-list">
            {data.seasons.map((season) => {
              return (
                <li className="season-item">
                  <SeasonContent season={season} />
                </li>
              );
            })}
          </ul>
        ))}
    </section>
  );
}
