import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';


export default function Bienvenida() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api-pelis-back.onrender.com/comedia");
        const movieData = await response.json();
        console.log(movieData);
        setData(movieData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
          <p className="mt-3">Cargando películas...</p>
        </div>
      </div>
    );
  }

  // Select featured movies for carousel (indices 0, 4, 8)
  const featuredMovies = [data.peliculas[0], data.peliculas[4], data.peliculas[8]];

  return (
    <Container fluid className="p-0 mb-5">
      <Row className="mb-5 w-100 m-0 d-block">
        <Col className="text-center py-4 bg-dark text-white shadow w-100">
          <h1 className="display-4">
            <Badge bg="danger" className="me-2">See</Badge>Movie
          </h1>
          <p className="lead w-100">Tu portal de películas favorito</p>
        </Col>
      </Row>
      
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        indicators={true}
        fade={true}
        className="mx-auto p-3"
        style={{ maxWidth: '1200px', borderRadius: '12px' }}
      >
        {featuredMovies.map((movie, idx) => (
          <Carousel.Item key={idx}>
            <div style={{ height: '900px', backgroundColor: '#000', borderRadius: '12px' }}>
              <img 
                className="d-block w-100 h-100"
                src={movie.portada} 
                alt={movie.titulo}
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <Carousel.Caption style={{ 
              background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))',
              padding: '30px'
            }}>
              <h3 className="fw-bold fs-1">{movie.titulo}</h3>
              <p className="d-none d-md-block">{movie.sinopsis}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
