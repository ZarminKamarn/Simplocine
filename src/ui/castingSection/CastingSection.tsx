import type { ListCasting, Person } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import { Casting } from "./Casting";

interface CastingSectionProps {
  data: ListCasting<Person> | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function CastingSection({
  data,
  isLoading,
  isError,
  errorMessage,
}: CastingSectionProps) {
  return (
    <section className="casting-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (data && data.cast && (
          <ul className="casting-list">
            {data.cast.map((cast) => {
              return (
                <li className="casting-item">
                  <Casting cast={cast} />
                </li>
              );
            })}
          </ul>
        ))}
    </section>
  );
}
