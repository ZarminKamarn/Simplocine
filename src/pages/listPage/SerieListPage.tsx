import type { ListElement, Series } from "../../core/types";
import { useFetcher } from "../../core/useFetcher";
import { SerieCarrouselSection } from "../../ui/carrouselSection/SerieCarrouselSection";
import "./listPage.css";

export function SerieListPage() {
  const series1 = useFetcher<ListElement<Series>>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=10759"
  );
  const series2 = useFetcher<ListElement<Series>>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=35"
  );
  const series3 = useFetcher<ListElement<Series>>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=16"
  );
  const series4 = useFetcher<ListElement<Series>>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=10765"
  );
  const series5 = useFetcher<ListElement<Series>>(
    "https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=80"
  );

  return (
    <div className="list-page-main">
      <SerieCarrouselSection
        title="Les séries d'action et d'aventure"
        data={series1.data}
        isLoading={series1.isLoading}
        isError={series1.isError}
        errorMessage={series1.errorMsg}
      />
      <SerieCarrouselSection
        title="Les séries de comédie"
        data={series2.data}
        isLoading={series2.isLoading}
        isError={series2.isError}
        errorMessage={series2.errorMsg}
      />
      <SerieCarrouselSection
        title="Les séries d'animation"
        data={series3.data}
        isLoading={series3.isLoading}
        isError={series3.isError}
        errorMessage={series3.errorMsg}
      />
      <SerieCarrouselSection
        title="Les séries fantastiques et de science-fiction"
        data={series4.data}
        isLoading={series4.isLoading}
        isError={series4.isError}
        errorMessage={series4.errorMsg}
      />
      <SerieCarrouselSection
        title="Les séries policières"
        data={series5.data}
        isLoading={series5.isLoading}
        isError={series5.isError}
        errorMessage={series5.errorMsg}
      />
    </div>
  );
}
