import type { Person } from "../../tmpTypes";
import { Casting } from "./Casting";

interface CastingSectionProps {
  casts: Array<Person>;
}

export function CastingSection({ casts }: CastingSectionProps) {
  return (
    <section className="casting-section">
      <ul className="casting-list">
        {casts.map((cast) => {
          return (
            <li className="casting-item">
              <Casting cast={cast} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
