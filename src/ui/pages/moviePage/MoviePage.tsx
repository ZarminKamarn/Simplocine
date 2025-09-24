import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import type { ListMovies } from "../../../tmpTypes";
import { MovieCarrousel } from "../../carrousel/MovieCarrousel";

export function MoviePage() {
  const params = useParams();
  const recommendedMovies = useFetcher<ListMovies>(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <>
      <section>
        <h2>Recommandations</h2>
        {recommendedMovies.data && (
          <MovieCarrousel data={recommendedMovies.data.results} />
        )}
      </section>
    </>
  );
}
