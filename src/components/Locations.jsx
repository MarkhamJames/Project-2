import React from 'react';
import { Link } from 'react-router-dom';

export default function Locations(props) {
  console.log(props.locations)
  return (

    <div id="locations">
      <Link to="/">Home</Link>
      {
        props.locations.map(location => (
          <div key={location.id} className="location">
            <h3>name: {location.name}</h3>
            <p>climate: {location.climate}</p>
            <p>terrain: {location.terrain}</p>
            <p>surface water: {location.surface_water}</p>
          
          
          
          </div>
        ))
      }
    </div>
  )
} 

