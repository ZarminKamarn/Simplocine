import { Carrousel } from "../../carrousel/Carrousel";

export function SerieListPage() {
  return (
    <>
      <section>
        <h2>Les séries d'action</h2>
        <Carrousel page="series" />
      </section>
      <section>
        <h2>Les séries romantiques</h2>
        <Carrousel page="series" />
      </section>
      <section>
        <h2>Les séries polars</h2>
        <Carrousel page="series" />
      </section>
      <section>
        <h2>Les séries historiques</h2>
        <Carrousel page="series" />
      </section>
      <section>
        <h2>Les séries fantasy</h2>
        <Carrousel page="series" />
      </section>
    </>
  );
}
