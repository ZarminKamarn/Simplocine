import type { ListElement, Movie } from "../../core/types";
import { useFetcher } from "../../core/useFetcher";
import { Banner } from "../../ui/banner/Banner";
import { MovieCarrouselSection } from "../../ui/carrouselSection/MovieCarrouselSection";
import { Paragraph } from "../../ui/paragraph/Paragraph";
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
      {(onAirMovies.isLoading && (
        <Paragraph text="En cours de chargement..." />
      )) ||
        (onAirMovies.isError && (
          <Paragraph text={onAirMovies.errorMsg || ""} />
        )) ||
        (onAirMovies.data && (
          <Banner movie={getRandomMovie(onAirMovies.data)} />
        ))}
      <MovieCarrouselSection
        title="Les films populaires"
        data={trendMovies.data}
        isLoading={trendMovies.isLoading}
        isError={trendMovies.isError}
        errorMessage={trendMovies.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films les mieux notés"
        data={topRatedMovies.data}
        isLoading={topRatedMovies.isLoading}
        isError={topRatedMovies.isError}
        errorMessage={topRatedMovies.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films à venir"
        data={upcomingMovies.data}
        isLoading={upcomingMovies.isLoading}
        isError={upcomingMovies.isError}
        errorMessage={upcomingMovies.errorMsg}
      />
    </div>
  );
}
