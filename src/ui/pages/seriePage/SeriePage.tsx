import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import type { ListSeries } from "../../../tmpTypes";
import { SerieCarrousel } from "../../carrousel/SerieCarrousel";

export function SeriePage() {
  const params = useParams();
  const recommendedSeries = useFetcher<ListSeries>(
    `https://api.themoviedb.org/3/tv/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <>
      <section>
        <h2>Recommandations</h2>
        {recommendedSeries.data && (
          <SerieCarrousel data={recommendedSeries.data.results} />
        )}
      </section>
    </>
  );
}
