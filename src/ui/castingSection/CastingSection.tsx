import type { ListCastingPerson } from "../../tmpTypes";
import { Casting } from "./Casting";

interface CastingSectionProps {
  casts: Array<ListCastingPerson>;
}

export function CastingSection({ casts }: CastingSectionProps) {
  return (
    <section>
      <ul>
        {casts.map((cast) => {
          return (
            <li>
              <Casting cast={cast} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
