import type { ListSeries } from "../../../tmpTypes";
import { useFetcher } from "../../../useFetcher";
import { SerieCarrouselSection } from "../../carrouselSection/SerieCarrouselSection";
import "./listPage.css";

export function SerieListPage() {
  const series1 = useFetcher<ListSeries>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=10759"
  );
  const series2 = useFetcher<ListSeries>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=35"
  );
  const series3 = useFetcher<ListSeries>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=16"
  );
  const series4 = useFetcher<ListSeries>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=10765"
  );
  const series5 = useFetcher<ListSeries>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=80"
  );

  return (
    <div className="list-page-main">
      <SerieCarrouselSection
        title="Les séries d'action et d'aventure"
        data={series1.data}
      />
      <SerieCarrouselSection
        title="Les séries de comédie"
        data={series2.data}
      />
      <SerieCarrouselSection
        title="Les séries d'animation"
        data={series3.data}
      />
      <SerieCarrouselSection
        title="Les séries fantastiques et de science-fiction"
        data={series4.data}
      />
      <SerieCarrouselSection
        title="Les séries policières"
        data={series5.data}
      />
    </div>
  );
}
