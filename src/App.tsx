import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./ui/header/Header";
import { Homepage } from "./pages/homepage/Homepage";
import { SeriePage } from "./pages/detailsPage/SeriePage";
import { MoviePage } from "./pages/detailsPage/MoviePage";
import { SerieListPage } from "./pages/listPage/SerieListPage";
import { MovieListPage } from "./pages/listPage/MovieListPage";
import { PersonPage } from "./pages/personPage/PersonPage";
import { Footer } from "./ui/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/series" element={<SerieListPage />} />
          <Route path="/movies" element={<MovieListPage />} />
          <Route path="/series/:id" element={<SeriePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
