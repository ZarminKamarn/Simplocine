import { Carrousel } from "../../carrousel/Carrousel";
import type { ListMovies, ListMoviesSingleResult } from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";

export function Homepage() {
  const trendMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1"
  );
  const topRatedMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1"
  );
  const upcomingMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1"
  );

  return (
    <>
      <section>
        <h2>Les films populaires</h2>
        {trendMovies.data && (
          <Carrousel<ListMoviesSingleResult>
            page="movies"
            data={trendMovies.data?.results}
          />
        )}
      </section>
      <section>
        <h2>Les films les mieux notés</h2>
        {topRatedMovies.data && (
          <Carrousel<ListMoviesSingleResult>
            page="movies"
            data={topRatedMovies.data?.results}
          />
        )}
      </section>
      <section>
        <h2>Les films à venir</h2>
        {upcomingMovies.data && (
          <Carrousel<ListMoviesSingleResult>
            page="movies"
            data={upcomingMovies.data?.results}
          />
        )}
      </section>
    </>
  );
}
