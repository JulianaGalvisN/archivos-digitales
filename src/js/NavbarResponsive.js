import React from 'react'
import '../css/NavbarResponsive.css';
import { Link } from 'react-router-dom'
import logo from '../images/logo_mini.svg'
import hamburger from '../images/hamburger.svg'

class NavbarResponsive extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false,};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.setState({ open: false });
  }

  toggleMenu() {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    const isOpen = this.state.open;
    let drop = "links closed";
    if(isOpen) {
      drop = "links open"
    }

    return (
      <div id="responsiveBar">
        <div className="logo">
          <Link to="/" className="active link">
            <img className="logo" src={logo} alt="Logo de Archivos Digitales"/>
          </Link>
        </div>
        <button className="menu" id="hamburger" onClick={this.toggleMenu}>
          <img className="hamburger-icon" src={hamburger} alt="Ícono de menú desplegable"/>
        </button>
        <div className={drop}>
          <Link to="/" className="active link">Inicio</Link>
          <Link to="/about" className="link">Este manual</Link>
          <Link to="/marcos-de-referencia" className="link">Marcos de referencia</Link>
          <Link to="/archivos" className="link">Archivos</Link>
          <Link to="/activismo" className="link">Activismo</Link>
          <Link to="/metodologia" className="link">Metodología</Link>
        </div>
      </div>
    )
  }

}

export default NavbarResponsive;
