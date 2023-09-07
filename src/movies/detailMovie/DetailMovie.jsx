import { useLocation } from 'react-router-dom'
import CloseButton from 'react-bootstrap/CloseButton';
import {Link} from 'react-router-dom'
import './DetailMovie.css'

export default function DetailMovie() {
    const location = useLocation();
    const movie = location.state;
  return (
    <div className="container">
        <div className="row">
        <div className="col">
                <div className="equis">
                    <Link to={`/${movie.genero}`}><CloseButton /></Link>
                </div>
                <h1 className='detail-titulo'>{movie.titulo}</h1>
            </div>
        </div>
        <div className="row otrafila">
            <div className="col">
                <img className='detail-img' src={movie.portada} alt="" />
            </div>
            <div className="col">
                <p className='sinopsis'><strong>Sinopsis:</strong> {movie.sinopsis}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <ul>
                    <li><strong>Actores:</strong> {movie.actores.map((actor) => {
                        return (<p className='ml-3' key={actor}>{actor},</p>)
                    })}</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}