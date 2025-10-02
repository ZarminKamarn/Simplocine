import { useParams } from "react-router";
import { useFetcher } from "../../core/useFetcher";
import type {
  ListCasting,
  ListElement,
  Person,
  SerieDetails,
  Series,
} from "../../core/types";
import { SerieCarrouselSection } from "../../ui/carrouselSection/SerieCarrouselSection";
import { useState } from "react";
import { Button } from "../../ui/button/Button";
import { SeasonSection } from "../../ui/seasonSection/SeasonSection";
import { SeriesSection } from "../../ui/detailSection/SeriesSection";
import { CastingSection } from "../../ui/castingSection/CastingSection";
import { SerieOverview } from "../../ui/overview/SerieOverview";
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
      <SeriesSection
        series={series.data}
        isError={series.isError}
        isLoading={series.isLoading}
        errorMessage={series.errorMsg}
      />
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
          <SerieOverview
            series={series.data}
            isError={series.isError}
            isLoading={series.isLoading}
            errorMessage={series.errorMsg}
          />
        )}
        {bottomDiv === "seasons" && (
          <SeasonSection
            data={series.data}
            isError={series.isError}
            isLoading={series.isLoading}
            errorMessage={series.errorMsg}
          />
        )}
        {bottomDiv === "casting" && (
          <CastingSection
            data={casting.data}
            isError={casting.isError}
            isLoading={casting.isLoading}
            errorMessage={casting.errorMsg}
          />
        )}
        {bottomDiv === "recommendations" && (
          <SerieCarrouselSection
            data={recommendedSeries.data}
            isLoading={recommendedSeries.isLoading}
            isError={recommendedSeries.isError}
            errorMessage={recommendedSeries.errorMsg}
          />
        )}
      </div>
    </div>
  );
}
