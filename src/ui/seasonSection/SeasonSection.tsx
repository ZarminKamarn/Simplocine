import type { Season } from "../../tmpTypes";
import { SeasonContent } from "./Season";
import "./season.css";

interface SeasonSectionProps {
  seasons: Array<Season>;
}

export function SeasonSection({ seasons }: SeasonSectionProps) {
  return (
    <section className="season-section">
      <ul className="season-list">
        {seasons.map((season) => {
          return (
            <li className="season-item">
              <SeasonContent season={season} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
