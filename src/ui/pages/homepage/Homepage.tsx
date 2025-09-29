import type { ListMovies, ListMoviesSingleResult } from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { Banner } from "../../banner/Banner";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";
import "./homepage.css";

export function Homepage() {
  const onAirMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1"
  );

  const trendMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1"
  );
  const topRatedMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1"
  );
  const upcomingMovies = useFetcher<ListMovies>(
    "https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1"
  );

  function getRandomMovie(movies: ListMovies): ListMoviesSingleResult {
    const length = movies.results.length;
    const index = Math.floor(Math.random() * length);

    return movies.results[index];
  }

  return (
    <div className="main">
      {onAirMovies.data && <Banner movie={getRandomMovie(onAirMovies.data)} />}
      <MovieCarrouselSection
        title="Les films populaires"
        data={trendMovies.data}
      />
      <MovieCarrouselSection
        title="Les films les mieux notés"
        data={topRatedMovies.data}
      />
      <MovieCarrouselSection
        title="Les films à venir"
        data={upcomingMovies.data}
      />
    </div>
  );
}
