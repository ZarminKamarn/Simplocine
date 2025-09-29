import type { Season } from "../../tmpTypes";
import { SeasonContent } from "./Season";

interface SeasonSectionProps {
  seasons: Array<Season>;
}

export function SeasonSection({ seasons }: SeasonSectionProps) {
  return (
    <section>
      <ul>
        {seasons.map((season) => {
          return (
            <li>
              <SeasonContent season={season} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
