import type { ListElement, Movie } from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";
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
      <MovieCarrouselSection title="Les films d'action" data={movies1.data} />
      <MovieCarrouselSection title="Les films d'horreur" data={movies2.data} />
      <MovieCarrouselSection
        title="Les films fantastiques"
        data={movies3.data}
      />
      <MovieCarrouselSection title="Les films de guerre" data={movies4.data} />
      <MovieCarrouselSection
        title="Les films documentaires"
        data={movies5.data}
      />
    </div>
  );
}
