import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import './DetailMovie.css';
import { useNavigate } from "react-router-dom";


export default function DetailMovie() {
  const location = useLocation();
  const movie = location.state;
  const navigate = useNavigate();

const handleBack = () => {
  navigate(-1); // retrocede una página
};

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h1 className="movie-title text-white">{movie.titulo}</h1>
          <Button variant="outline-danger" onClick={handleBack}>
            <i className="bi bi-x-lg"></i> Volver
          </Button>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={5}>
          <div className="detail-img-container shadow">
            <img className="detail-img" src={movie.portada} alt={movie.titulo} />
          </div>
        </Col>
        <Col md={7}>
          <div className="movie-details p-4 bg-light shadow rounded">
            <h3 className="mb-4 text-black">Información</h3>
                        
            <div className="mb-4">
              <Badge bg="danger" pill className="px-3 py-2">{movie.genero}</Badge>
            </div>

            
            <h4 className="mb-3 text-black">Sinopsis</h4>
            <p className="sinopsis mb-4 text-black">{movie.sinopsis}</p>
            
            <div className="d-flex flex-wrap justify-content-between mb-4">
              {movie.director && (
                <div className="me-3 mb-3">
                  <h4 className="mb-2 text-black">Director</h4>
                  <p className="fw-bold text-danger">{movie.director}</p>
                </div>
              )}
              
              {movie.duracion && (
                <div className="me-3 mb-3">
                  <h4 className="mb-2 text-black">Duración</h4>
                  <p className="fw-bold text-danger">{movie.duracion} min</p>
                </div>
              )}
              
              {movie.anio && (
                <div className="mb-3">
                  <h4 className="mb-2 text-black">Año</h4>
                  <p className="fw-bold text-danger">{movie.anio}</p>
                </div>
              )}
            </div>
            
            <div>
              <h4 className="mb-2 text-black">Actores</h4>
              <ListGroup variant="flush" className="actor-list">
                {movie.actores.map((actor, index) => (
                  <ListGroup.Item key={index} className="bg-transparent">
                    <i className="bi bi-person-fill me-2"></i> {actor}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>

            {movie.triler && (
            <div className="mt-4">
              <h4 className="mb-2 text-black">Trailer</h4>
              <div className="ratio ratio-16x9">
              <iframe 
                src={movie.triler.replace("watch?v=", "embed/")} 
                title={`Trailer de ${movie.titulo}`}
                allowFullScreen
                className="rounded shadow"
              ></iframe>
              </div>
            </div>
          )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}