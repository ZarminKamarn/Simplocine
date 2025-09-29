import { useParams } from "react-router";
import {
  type ListMovies,
  type ListSeries,
  type PersonDetails,
} from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { PersonSection } from "../../detailSection/PersonSection";

export function PersonPage() {
  const params = useParams();
  const person = useFetcher<PersonDetails>(
    `https://api.themoviedb.org/3/person/${params.id}?language=fr-FR`
  );
  const recommendedMovies = useFetcher<ListMovies>(
    `https://api.themoviedb.org/3/person/${params.id}/movie_credits?language=fr-FR`
  );
  const recommendedSeries = useFetcher<ListSeries>(
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
