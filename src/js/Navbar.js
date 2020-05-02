import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_mini.svg';
import hamburger from '../images/hamburger.svg';
import '../css/Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render() {
    return (
      <div className={this.state.open ? "navbar is-open" : "navbar" }>
        <div className="topnav">
          <div className="logo">
            <NavLink to="/" className="active link">
              <img className="logo" src={logo} alt="Logo de Archivos Digitales" />
            </NavLink>
            <button className="menu" id="hamburger" onClick={this.toggleMenu}>
              <img
                className="hamburger-icon"
                src={hamburger}
                alt="Ícono de menú desplegable"
              />
            </button>
          </div>
          <div className="links">
            <NavLink to="/" className="active link">
              Inicio
            </NavLink>
            <NavLink to="/about" className="link">
              Acerca de
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
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
