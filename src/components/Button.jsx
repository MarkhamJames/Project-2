import React from 'react'
import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <div className="buttonContainer">
      <Link to={props.endpoint}>
      <button onClick={props.handleClick}
        className="CreateButton">Ghibli-me</button>
      </Link>
    </div>
  )
}