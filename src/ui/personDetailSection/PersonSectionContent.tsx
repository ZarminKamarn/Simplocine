import type { PersonDetails } from "../../core/types";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";

interface PersonSectionContentProps {
  person: PersonDetails;
}

export function PersonSectionContent({ person }: PersonSectionContentProps) {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
        alt={`Photo de ${person.name}`}
        origin="person"
      />
      <div className="person-info">
        <TitleH2 origin="banner" text={person.name} />
        <Paragraph type="description" text={person.biography} />
        <Paragraph
          text={`Genre: ${
            (person.gender === 1 && "Femme") ||
            (person.gender === 2 && "Homme") ||
            (person.gender === 3 && "Non-Binaire") ||
            (person.gender === 3 && "Inconnu")
          }`}
        />
        <Paragraph
          text={`Né${person.gender === 1 && "e"} le ${person.birthday} à ${
            person.place_of_birth
          }`}
        />
        {person.deathday && (
          <Paragraph
            text={`Décédé${person.gender === 1 && "e"} le ${person.deathday}`}
          />
        )}
      </div>
    </>
  );
}
