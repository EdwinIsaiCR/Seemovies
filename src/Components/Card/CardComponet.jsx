import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Card.css';
import {Link} from 'react-router-dom'
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useState } from 'react';

export default function CardComponet(props) {
  const [heartState, setHeartState]= useState(false)

    function handlerLike(){
        setHeartState(!heartState);
    }
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src={props.movie.portada}/>
      <Card.Body>
      <p onClick={handlerLike} className="heart"> {heartState ? <BsSuitHeartFill className="red-icon"/>: <BsSuitHeart/>} </p>
        <Card.Title>{props.movie.titulo}</Card.Title>
        <Card.Text>
          {props.movie.sinopsis}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Año: {props.movie.anio}</ListGroup.Item>
        <ListGroup.Item>Duracion: {props.movie.duracion}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/${props.movie.genero}/${props.movie.titulo}`} state={props.movie}>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
}
