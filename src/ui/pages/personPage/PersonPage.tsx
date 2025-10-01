import { useParams } from "react-router";
import {
  type ListElement,
  type Movie,
  type PersonDetails,
  type Series,
} from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { PersonSection } from "../../personDetailSection/PersonSection";

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
    <>{person.data && <PersonSection person={person.data} />}</>
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
