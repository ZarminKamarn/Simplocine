import { useParams } from "react-router";
import {
  type ListElement,
  type Movie,
  type PersonDetails,
  type Series,
} from "../../core/types";
import { useFetcher } from "../../core/useFetcher";
import { PersonSection } from "../../ui/personDetailSection/PersonSection";

export function PersonPage() {
  const params = useParams();
  const person = useFetcher<PersonDetails>(
    `https://api.themoviedb.org/3/person/${params.id}?language=fr-FR`
  );
  const starringMovies = useFetcher<ListElement<Movie>>(
    `https://api.themoviedb.org/3/person/${params.id}/movie_credits?language=fr-FR`
  );
  const starringSeries = useFetcher<ListElement<Series>>(
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
    </>
    /*
    <MovieCarrouselSection
        title="Filmographie"
        data={recommendedMovies.data}
      />
      <SerieCarrouselSection
        title="Séritographie"
        data={recommendedSeries.data}
      />
      */
  );
}
