import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarResponsive from './NavbarResponsive';
import logo from '../images/logo_mini.svg';
import '../css/Navbar.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="topnav" id="desktopBar">
        <div className="logo">
          <NavLink to="/" className="active link">
            <img className="logo" src={logo} alt="Logo de Archivos Digitales" />
          </NavLink>
        </div>
        <div className="links">
          <NavLink to="/" className="active link">
            Inicio
          </NavLink>
          <NavLink to="/about" className="link">
            Este manual
          </NavLink>
          <NavLink to="/marcos-de-referencia" className="link">
            Marcos de referencia
          </NavLink>
          <NavLink to="/archivos" className="link">
            Archivos
          </NavLink>
          <NavLink to="/activismo" className="link">
            Activistas
          </NavLink>
          <NavLink to="/metodologia" className="link">
            Qué hacer con el archivo
          </NavLink>
          <NavLink to="/acerca_de" className="link">
            Acerca de
          </NavLink>
        </div>
      </div>
      <NavbarResponsive />
    </div>
  );
}

export default Navbar;
