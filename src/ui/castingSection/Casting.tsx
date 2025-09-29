import { Link } from "react-router";
import type { ListCastingPerson } from "../../tmpTypes";

interface CastingProps {
  cast: ListCastingPerson;
}

export function Casting({ cast }: CastingProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
        alt={`Photo de ${cast.name}`}
      />
      <div>
        <Link to={`/people/${cast.id}`}>{cast.name}</Link>
        <p>{cast.character}</p>
      </div>
    </>
  );
}
