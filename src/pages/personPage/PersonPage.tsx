import { useParams } from "react-router";
import {
  type ListCasting,
  type PersonDetails,
  type PersonSingleMovie,
  type PersonSingleSeries,
} from "../../core/types";
import { useFetcher } from "../../core/useFetcher";
import { PersonSection } from "../../ui/personDetailSection/PersonSection";
import { PersonMovieCarrouselSection } from "../../ui/carrouselSection/PersonMovieCarrouselSection";
import { PersonSerieCarrouselSection } from "../../ui/carrouselSection/PersonSerieCarrouselSection";

export function PersonPage() {
  const params = useParams();
  const person = useFetcher<PersonDetails>(
    `https://api.themoviedb.org/3/person/${params.id}?language=fr-FR`
  );
  const starringMovies = useFetcher<ListCasting<PersonSingleMovie>>(
    `https://api.themoviedb.org/3/person/${params.id}/movie_credits?language=fr-FR`
  );
  const starringSeries = useFetcher<ListCasting<PersonSingleSeries>>(
    `https://api.themoviedb.org/3/person/${params.id}/tv_credits?language=fr-FR`
  );

  return (
    <>
      <PersonSection
        person={person.data}
        isError={person.isError}
        isLoading={person.isLoading}
        errorMessage={person.errorMsg}
      />
      <PersonMovieCarrouselSection
        title="Filmographie"
        data={starringMovies.data}
        isLoading={starringMovies.isLoading}
        isError={starringMovies.isError}
        errorMessage={starringMovies.errorMsg}
      />
      <PersonSerieCarrouselSection
        title="Les séries"
        data={starringSeries.data}
        isLoading={starringSeries.isLoading}
        isError={starringSeries.isError}
        errorMessage={starringSeries.errorMsg}
      />
    </>
  );
}
