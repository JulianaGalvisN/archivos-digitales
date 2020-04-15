import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/reset.css';
import '../css/App.css'
import linea_tiempo from '../images/linea_tiempo.png'
import archivo from '../images/archivo.png'
import activismo_img from '../images/activismo-home.png'
import cano from '../images/cano.png'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="home">
        <img className="image" src={cano} alt="Imagen de María Cano"/>
        <div className="headline-container">
          <div className="headline">
            <h1 className="title">Archivos</h1>
            <h1 className="title">digitales</h1>
            <h6 className="title subtitle">para activistas de mujeres y LGBT</h6>
          </div>
          <div className="intro text">
            <h2 className="title">¿Qué es?</h2>
            <div className="paragraph">
              <p>Este proyecto es posible gracias a las luchas de las y los activistas de mujeres y LGBT, que día a día y durante toda la historia han luchado porque tengamos los derechos de los que hoy gozamos.</p>
              <p>Es una herramienta abierta que indaga en el uso de los archivos digitales existentes en Colombia la forma en que estos pueden apoyar el trabajo de activistas de mujeres y LGBT en el país. </p>
              <p>Esta herramienta contiene una lista de activistas de mujeres y LGBT en Colombia, una herramienta que permite explorar todos los archivos digitales existentes en Colombia, unos marcos de referencia sobre la legislación existente en Colombia y por último una metodología sobre cómo identificar información relevante en cada archivo digital.</p>
            </div>
          </div>
        </div>
      </div>

      <Banner
      title1="Explora"
      title2="el archivo"
      link="/archivos"
      bgImage={archivo}
      height="455px"
      margin="Banner"/>

      <div className="activism">
        <div className="image">
          <img src={activismo_img} alt="Imagen de activismo de género"/>
        </div>
        {/* Reutilizar este bloque de código para títulos y párrafos */}
        <div className="text">
          <div className="title-container">
            <h2 className="title">El activismo</h2>
            <h2 className="title">de mujeres y LGBT</h2>
          </div>
          <p className="paragraph">
          Se comprende como las acciones de individuos que carecen de influencia institucionalizada, que buscan romper con las construcciones ‘legitimadoras’ de las masculinidades y la heterosexualidad, y pretenden proponer cambios en el orden social existente.</p>
        </div>
        {/* Hasta aquí */}
      </div>


      <Banner
      title1="Explora la línea"
      title2="de tiempo"
      link="/activismo"
      bgImage={linea_tiempo}
      height="455px"
      margin="Banner"/>

      <Footer/>

    </div>
  );
}

export default App;
