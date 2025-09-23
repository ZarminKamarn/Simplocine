import { Carrousel } from "../../carrousel/Carrousel";

export function SerieListPage() {
  return (
    <>
      <section>
        <h2>Les séries d'action</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=[genre_id]"
          page="series"
        />
      </section>
      <section>
        <h2>Les séries romantiques</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=[genre_id]"
          page="series"
        />
      </section>
      <section>
        <h2>Les séries polars</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=[genre_id]"
          page="series"
        />
      </section>
      <section>
        <h2>Les séries historiques</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=[genre_id]"
          page="series"
        />
      </section>
      <section>
        <h2>Les séries fantasy</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/tv?language=fr-FR&page=1&with_genres=[genre_id]"
          page="series"
        />
      </section>
    </>
  );
}
