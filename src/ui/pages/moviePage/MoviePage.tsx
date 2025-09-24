import { useParams } from "react-router";
import { Carrousel } from "../../carrousel/Carrousel";

export function MoviePage() {
  const params = useParams();
  return (
    <>
      <section>
        <h2>Recommandations</h2>
        <Carrousel page="movies" />
      </section>
    </>
  );
}
