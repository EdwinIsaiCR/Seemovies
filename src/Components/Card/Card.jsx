import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ movie }) {
  // Determine rating display - assuming movie.calificacion is a value between 0-10 or 0-5
  const rating = movie.calificacion || 0;
  
  return (
    <Link 
      to={`/pelicula/${movie.titulo.replace(/\s+/g, '-').toLowerCase()}`} 
      state={movie} 
      className="movie-card-link"
    >
      <div className="movie-card">
        
        <div className="card-image-container">
          <img src={movie.portada} alt={movie.titulo} className="card-image" />
          <div className="card-overlay">
            <button className="view-details-btn">Ver Detalles</button>
          </div>
        </div>
        <div className="card-body">
        <div className="rating-badge">
          <span className="rating-star">★</span>
          <span className="rating-number">{typeof rating === 'number' ? rating.toFixed(1) : rating}</span>
        </div>
          <h5 className="card-title">{movie.titulo}</h5>
          <p className="card-director">Duracion: {movie.duracion}</p>
        </div>
      </div>
    </Link>
  );
}