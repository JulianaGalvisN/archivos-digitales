import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Archivo from './Archivo';
import Dropdown from './Dropdown';
import '../css/Archivos.css'
import archivo from '../images/banner-archivos.png'
import lupa from '../images/lupa.svg'

function Archivos(props) {
  return (
    <div className="archivos">
      <Navbar/>

      <Banner
      title1="Los"
      title2="archivos"
      bgImage={archivo}
      height="300px"
      margin="Banner margin"/>

      <div className="filtros">
        {/* Estos son los dropdowns pero toca modificarlos en el archivo Dropdown.js porque no tienen funcionalidad aún */}
        <Dropdown name="Tema" options="Todos"/>
        <Dropdown name="Tipo" options="Todos"/>
        <div className="searchbar">
          <p className="name">Búsqueda</p>
          <div className="bar">
            <input type="text" id="search" name="search"/>
            <div className="icon">
              <img className="image" src={lupa} alt="Ícono de lupa"/>
            </div>
          </div>
        </div>
      </div>
      <div className="results">
        <h2 className="title-results">Resultados</h2>
        <div className="archivos-container">

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

          <Archivo
          title="Lorem ipsum dolor sit amet, consec tetuer"
          author="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
          link="/archivos"/>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Archivos;
