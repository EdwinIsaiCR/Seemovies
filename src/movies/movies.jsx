import Card from "../components/Card/Card.jsx";
import Spinner from 'react-bootstrap/Spinner';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import "./movies.css"


export default function Movies(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pelisFilter, setPelisFilter] = useState ([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (loading) {
      fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data)
          setPelisFilter(data.peliculas);
          setLoading(false);
        });
    }
  }, []);

  const handlerSearch = (e) =>{
    let value = e.target.value;
    setSearch(value);
    if(!value){
      setPelisFilter(data.peliculas);
    } else{
      const filterMovies = data.peliculas.filter((movie) => movie.titulo.toLowerCase().includes(search.toLowerCase()));
      setPelisFilter(filterMovies);
      console.log(pelisFilter);
    }
    
  }


  if (loading) {
    return <>
    <div className="container text-center">
      <div className="row align-items-center spinner">
        <div className="col">
          <Spinner animation="border" variant="danger" />
        </div>
      </div>
        </div>
    </>
  } else {
    return (
        <>
        <h1 className="titulo text-center">Peliculas de {data.genero}</h1>
        
       <div className="container-fluid mt-5" >
        <div className="row mb-5">
          <div className="col">
          <div className="form__group">
            <input type="text" className="form__input" id="name" placeholder="Buscar pelicula por titulo..." onChange={handlerSearch} />
            <label className="form__label">Buscar pelicula por titulo...</label>
          </div>
         
          </div>
        </div>
        <div className="row">
          
            
            {pelisFilter.map((movie, index)=> {
            return (
                <div className="col cardHover" key={index} >
                    <Card movie={movie}/>
                </div>
            )
        })}
        </div>

       </div>
        </>
      );
  }
}

  

 
