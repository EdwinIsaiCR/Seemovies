import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Spinner from 'react-bootstrap/Spinner';
import "./movies.css";

export default function Movies({ genero }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api-pelis-back.onrender.com/${genero}`);
        const movieData = await response.json();
        console.log(movieData);
        setData(movieData);
        setFilteredMovies(movieData.peliculas);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genero]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (!value.trim()) {
      setFilteredMovies(data.peliculas);
    } else {
      const filtered = data.peliculas.filter(
        (movie) => movie.titulo.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
          <p className="mt-3">Cargando películas de {genero}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="movies-container">
      <h1 className="genre-title text-center">Películas de {data.genero}</h1>
      
      <div className="container-fluid mt-4">
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar película por título..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <label className="search-label">Buscar película</label>
            </div>
          </div>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="no-results text-center">
            <p>No se encontraron películas que coincidan con "{searchTerm}"</p>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-5">
            {filteredMovies.map((movie, index) => (
              <div className="col movie-card-container" key={index}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}