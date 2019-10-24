import React from 'react';
import { Link } from 'react-router-dom';

export default function Vehicles(props) {
  console.log(props.vehicles)
  return (

    <div id="vehicles">
      <Link to="/">Home</Link>
      {
        props.vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle">
            <h3>name: {vehicle.name}</h3>
            <p>description: {vehicle.description}</p>
            <p>vehicle class: {vehicle.vehicle_class}</p>
            
          
          
          
          </div>
        ))
      }
    </div>
  )
} 