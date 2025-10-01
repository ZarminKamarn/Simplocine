import { Link } from "react-router";
import type { ListCastingPerson } from "../../tmpTypes";
import "./casting.css";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";

interface CastingProps {
  cast: ListCastingPerson;
}

export function Casting({ cast }: CastingProps) {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
        alt={`Photo de ${cast.name}`}
        origin="casting"
      />
      <div>
        <h3>
          <Link to={`/people/${cast.id}`} className="casting-link">
            {cast.name}
          </Link>
        </h3>
        <Paragraph text={`Jouant: ${cast.character}`} />
      </div>
    </>
  );
}
