import type { PersonDetails } from "../../core/types";
import { Paragraph } from "../paragraph/Paragraph";
import "./personSection.css";
import { PersonSectionContent } from "./PersonSectionContent";

interface PersonSectionProps {
  person: PersonDetails | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export function PersonSection({
  person,
  isLoading,
  isError,
  errorMessage,
}: PersonSectionProps) {
  return (
    <section className="person-section">
      {(isLoading && <Paragraph text="En cours de chargement..." />) ||
        (isError && <Paragraph text={errorMessage || ""} />) ||
        (person && <PersonSectionContent person={person} />)}
    </section>
  );
}
