import React from 'react';
import { Link } from 'react-router-dom';

export default function Films(props) {
  console.log(props.films)
  return (

    <div id="films">
      <Link to="/">Home</Link>
      {
        props.films.map(film => (
          <div key={film.id} className="film">
            <h3>{film.title}</h3>
            <p>Directed by: {film.director}</p>
            <p>{film.description}</p>
            
          </div>
        ))
      }
    </div>
  )
} 