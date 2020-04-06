import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom'
import NavbarResponsive from './NavbarResponsive';
import logo from '../images/logo_mini.svg'

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="topnav" id="desktopBar">
        <div className="logo">
          <Link to="/" className="active link">
            <img className="logo" src={logo} alt="Logo de Archivos Digitales"/>
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="active link">Inicio</Link>
          <Link to="/about" className="link">Este manual</Link>
          <Link to="/marcos-de-referencia" className="link">Marcos de referencia</Link>
          <Link to="/archivos" className="link">Archivos</Link>
          <Link to="/activismo" className="link">Activismo</Link>
          <Link to="/metodologia" className="link">Metodología</Link>
        </div>
      </div>
      <NavbarResponsive />
    </div>
  )
}

export default Navbar;
