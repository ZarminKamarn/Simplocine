import type { SerieDetails } from "../../core/types";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";

interface SeriesSectionContentProps {
  series: SerieDetails;
}

export function SeriesSectionContent({ series }: SeriesSectionContentProps) {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
        alt={`image de ${series.name}`}
        origin="banner"
      />
      <div className="details-info">
        <TitleH2 origin="banner" text={series.name} />
        <Paragraph text={series.overview} type="description" />
        <Paragraph text={`${series.number_of_seasons} saisons`} />
        <Paragraph text={`Note: ${series.vote_average}/10`} />
      </div>
    </>
  );
}
