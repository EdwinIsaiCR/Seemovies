import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import './bienvenida.css';


export default function bienvenida() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (loading) {
      fetch(`https://api-pelis-back.onrender.com/comedia`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data)
          setLoading(false);
        });
    }
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
 
  if (loading) {
    return <>
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <Spinner animation="border" variant="danger" />
        </div>
      </div>
        </div>
    </>
  } else {
    return (
      <>
      <h1 className="text-center">Bienvenido a SeeMovie</h1>
  
      
      <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="carousel-img text-center" src={data.peliculas[0].portada} alt="" />
        <Carousel.Caption className="descripcion">
          <h3 className="title-car">{data.peliculas[0].titulo}</h3>
          <p>{data.peliculas[0].sinopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-img " src={data.peliculas[4].portada} alt="" />
        <Carousel.Caption className="descripcion"> 
        <h3 className="title-car">{data.peliculas[4].titulo}</h3>
          <p>{data.peliculas[4].sinopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="carousel-img" src={data.peliculas[8].portada} alt="" />
        <Carousel.Caption className="descripcion">
        <h3 className="title-car">{data.peliculas[8].titulo}</h3>
          <p className="des-car">{data.peliculas[8].sinopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
}

