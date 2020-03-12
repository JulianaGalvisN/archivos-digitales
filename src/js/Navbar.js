import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (

    <div className="topnav">
      <Link to="/" className="active">Inicio</Link>
      <Link to="/about">Este manual</Link>
      <Link to="/marcos-de-referencia">Marcos de referencia</Link>
      <Link to="/archivos">Archivos</Link>
      <Link to="/activismo">Activismo</Link>
      <Link to="/metodologia">Metodología</Link>

    </div>
  )
}

export default Navbar;
