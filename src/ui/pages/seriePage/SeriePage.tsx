import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import type { ListCasting, ListSeries, SerieDetails } from "../../../tmpTypes";
import { SerieCarrouselSection } from "../../carrouselSection/SerieCarrouselSection";
import { useState } from "react";
import { Button } from "../../button/Button";
import { SeasonSection } from "../../seasonSection/SeasonSection";
import { Series } from "../../detailSection/SeriesSection";
import { CastingSection } from "../../castingSection/CastingSection";
import { SerieOverview } from "../../overview/SerieOverview";

export function SeriePage() {
  const params = useParams();
  const [bottomDiv, setBottomDiv] = useState<
    "overview" | "casting" | "recommendations" | "seasons"
  >("overview");
  const series = useFetcher<SerieDetails>(
    `https://api.themoviedb.org/3/tv/${params.id}?language=fr-FR`
  );
  const casting = useFetcher<ListCasting>(
    `https://api.themoviedb.org/3/tv/${params.id}/credits?language=fr-FR`
  );
  const recommendedSeries = useFetcher<ListSeries>(
    `https://api.themoviedb.org/3/tv/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <>
      {series.data && <Series series={series.data} />}
      <div>
        <Button
          name="Informations"
          onClick={() => {
            setBottomDiv("overview");
          }}
        />
        <Button
          name="Saisons"
          onClick={() => {
            setBottomDiv("seasons");
          }}
        />
        <Button
          name="Casting"
          onClick={() => {
            setBottomDiv("casting");
          }}
        />
        <Button
          name="Recommandations"
          onClick={() => {
            setBottomDiv("recommendations");
          }}
        />
      </div>
      {bottomDiv === "overview" && series.data && (
        <SerieOverview series={series.data} />
      )}
      {bottomDiv === "seasons" && series.data && (
        <SeasonSection seasons={series.data.seasons} />
      )}
      {bottomDiv === "casting" && casting.data && (
        <CastingSection casts={casting.data.cast} />
      )}
      {bottomDiv === "recommendations" && (
        <SerieCarrouselSection
          title="Recommandations"
          data={recommendedSeries.data}
        />
      )}
    </>
  );
}
