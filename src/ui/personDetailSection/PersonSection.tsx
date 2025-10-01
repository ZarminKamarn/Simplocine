import type { PersonDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import "./personSection.css";

interface PersonSectionProps {
  person: PersonDetails;
}

export function PersonSection({ person }: PersonSectionProps) {
  return (
    <section className="person-section">
      <Image
        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
        alt={`Photo de ${person.name}`}
        origin="person"
      />
      <div className="person-info">
        <h2 className="person-title">{person.name}</h2>
        <p className="person-description">{person.biography}</p>
        <p>
          Genre:{" "}
          {(person.gender === 1 && "Femme") ||
            (person.gender === 2 && "Homme") ||
            (person.gender === 3 && "Non-Binaire") ||
            (person.gender === 3 && "Inconnu")}
        </p>
        <p>
          Né{person.gender === 1 && "e"} le {person.birthday} à{" "}
          {person.place_of_birth}
        </p>
        {person.deathday && (
          <p>
            Décédé{person.gender === 1 && "e"} le {person.deathday}
          </p>
        )}
      </div>
    </section>
  );
}
