import type { ListCastingPerson } from "../../tmpTypes";
import { Casting } from "./Casting";

interface CastingSectionProps {
  casts: Array<ListCastingPerson>;
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
