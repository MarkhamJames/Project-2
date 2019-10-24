import React from 'react';
import { Link } from 'react-router-dom';

export default function People(props) {
  console.log(props.people)
  return (

    <div id="people">
      <Link to="/">Home</Link>
      {
        props.people.map(characters => (
          <div key={characters.id} className="characters">
            <h3>name: {characters.name}</h3>
            <p>gender: {characters.gender}</p>
            <p>age: {characters.age}</p>
            <p>eye color: {characters.eye_color}</p>
            <p>hair color: {characters.hair_color}</p>
          </div>
        ))
      } 
    </div>
  )
}
