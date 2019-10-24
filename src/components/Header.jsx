import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <a href="https://www.linkedin.com/in/james-markham-02578ab8/">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </div>
  
  )
}