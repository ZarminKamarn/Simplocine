import type { ListElement, Movie } from "../../core/types";
import { useFetcher } from "../../core/useFetcher";
import { MovieCarrouselSection } from "../../ui/carrouselSection/MovieCarrouselSection";
import "./listPage.css";

export function MovieListPage() {
  const movies1 = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=28"
  );
  const movies2 = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=27"
  );
  const movies3 = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=14"
  );
  const movies4 = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=10752"
  );
  const movies5 = useFetcher<ListElement<Movie>>(
    "https://api.themoviedb.org/3/discover/movie?&language=fr-FR&page=1&with_genres=99"
  );

  return (
    <div className="list-page-main">
      <MovieCarrouselSection
        title="Les films d'action"
        data={movies1.data}
        isLoading={movies1.isLoading}
        isError={movies1.isError}
        errorMessage={movies1.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films d'horreur"
        data={movies2.data}
        isLoading={movies2.isLoading}
        isError={movies2.isError}
        errorMessage={movies2.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films fantastiques"
        data={movies3.data}
        isLoading={movies3.isLoading}
        isError={movies3.isError}
        errorMessage={movies3.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films de guerre"
        data={movies4.data}
        isLoading={movies4.isLoading}
        isError={movies4.isError}
        errorMessage={movies4.errorMsg}
      />
      <MovieCarrouselSection
        title="Les films documentaires"
        data={movies5.data}
        isLoading={movies5.isLoading}
        isError={movies5.isError}
        errorMessage={movies5.errorMsg}
      />
    </div>
  );
}
