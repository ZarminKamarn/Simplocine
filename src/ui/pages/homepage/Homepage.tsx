import type { ListElement, Movie } from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { Banner } from "../../banner/Banner";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";
import "./homepage.css";

export function Homepage() {
  const onAirMovies = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1"
  );

  const trendMovies = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1"
  );
  const topRatedMovies = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1"
  );
  const upcomingMovies = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1"
  );

  function getRandomMovie(movies: ListElement<Movie>): Movie {
    const length = movies.results.length;
    const index = Math.floor(Math.random() * length);

    return movies.results[index];
  }

  return (
    <div className="homepage-main">
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
