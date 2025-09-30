import { Link } from "react-router";
import type { ListCastingPerson } from "../../tmpTypes";
import "./casting.css";

interface CastingProps {
  cast: ListCastingPerson;
}

export function Casting({ cast }: CastingProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
        alt={`Photo de ${cast.name}`}
        className="casting-img"
      />
      <div>
        <h3>
          <Link to={`/people/${cast.id}`} className="casting-link">
            {cast.name}
          </Link>
        </h3>
        <p>Jouant: {cast.character}</p>
      </div>
    </>
  );
}
