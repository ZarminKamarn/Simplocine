import { useParams } from "react-router";
import { Carrousel } from "../../carrousel/Carrousel";

export function MoviePage() {
  const params = useParams();
  return (
    <>
      <section>
        <h2>Recommandations</h2>
        <Carrousel
          apiLink={`https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=fr-FR&page=1`}
          page="movies"
        />
      </section>
    </>
  );
}
