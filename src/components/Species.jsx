import React from 'react';
import { Link } from 'react-router-dom';

export default function Species(props) {
  console.log(props.species)
  return (

    <div id="species">
      <Link to="/">Home</Link>
      {
        props.species.map(specie => (
          <div key={specie.id} className="specie">
          <h3>name: {specie.name}</h3>
          <p>classification: {specie.classification}</p>
          <p>eye colors: {specie.eye_colors}</p>
          <p>hair colors: {specie.hair_colors}</p>
          </div>
          ))
        }
      </div>
    )
  }                
