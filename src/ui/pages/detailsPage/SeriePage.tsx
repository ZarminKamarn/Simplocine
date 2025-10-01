import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import type {
  ListCasting,
  ListElement,
  Person,
  SerieDetails,
  Series,
} from "../../../tmpTypes";
import { SerieCarrouselSection } from "../../carrouselSection/SerieCarrouselSection";
import { useState } from "react";
import { Button } from "../../button/Button";
import { SeasonSection } from "../../seasonSection/SeasonSection";
import { SeriesSection } from "../../detailSection/SeriesSection";
import { CastingSection } from "../../castingSection/CastingSection";
import { SerieOverview } from "../../overview/SerieOverview";
import "./detailsPage.css";

export function SeriePage() {
  const params = useParams();
  const [bottomDiv, setBottomDiv] = useState<
    "overview" | "casting" | "recommendations" | "seasons"
  >("overview");
  const series = useFetcher<SerieDetails>(
    `https://api.themoviedb.org/3/tv/${params.id}?language=fr-FR`
  );
  const casting = useFetcher<ListCasting<Person>>(
    `https://api.themoviedb.org/3/tv/${params.id}/credits?language=fr-FR`
  );
  const recommendedSeries = useFetcher<ListElement<Series>>(
    `https://api.themoviedb.org/3/tv/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <div className="main">
      {series.data && <SeriesSection series={series.data} />}
      <div>
        <div className="btn-div">
          <Button
            name="Informations"
            onClick={() => {
              setBottomDiv("overview");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "overview"}
          />
          <Button
            name="Saisons"
            onClick={() => {
              setBottomDiv("seasons");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "seasons"}
          />
          <Button
            name="Casting"
            onClick={() => {
              setBottomDiv("casting");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "casting"}
          />
          <Button
            name="Recommandations"
            onClick={() => {
              setBottomDiv("recommendations");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "recommendations"}
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
          <SerieCarrouselSection data={recommendedSeries.data} />
        )}
      </div>
    </div>
  );
}
