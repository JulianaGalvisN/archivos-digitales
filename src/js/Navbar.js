import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (

    <div className="topnav">
      <Link to="/" className="active link">Inicio</Link>
      <Link to="/about" className="link">Este manual</Link>
      <Link to="/marcos-de-referencia" className="link">Marcos de referencia</Link>
      <Link to="/archivos" className="link">Archivos</Link>
      <Link to="/activismo" className="link">Activismo</Link>
      <Link to="/metodologia" className="link">Metodología</Link>

    </div>
  )
}

export default Navbar;
