import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Bienvenida from './pages/home/bienvenida/bienvenida';
import Movies from './pages/movies/movies';
import DetailMovie from './pages/movies/detailMovie/DetailMovie';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/comedia" element={<Movies genero="comedia" />} />
            <Route path="/independientes" element={<Movies genero="independientes" />} />
            <Route path="/drama" element={<Movies genero="drama" />} />
            <Route path="/pelicula/:titulo" element={<DetailMovie />} />
            <Route path="*" element={<h1 className="text-center mt-5">Página no encontrada</h1>} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2023 SeeMovie - Todos los derechos reservados</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;