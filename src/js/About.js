import React from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
import '../css/About.css'
import este_manual from '../images/este-manual.png'

function About(props) {
  return (
    <div className="About">

      <Navbar/>

      <Banner
      title1="Este"
      title2="manual"
      bgImage={este_manual}
      height="350px"
      margin="Banner margin"
      />

      <div className="intro text">
        <h2 className="title">¿Qué es?</h2>
        <div className="paragraph">
          <p>Este manual se crea en el marco de un proyecto de investigación de maestría en Humanidades Digitales de la Universidad de Los Andes.
          Consiste en brindar recursos sobre el archivo digital existente en Colombia y su posible uso por parte de activistas de género en Colombia.</p>
          <p>Contiene un marco de referencia con los conceptos trabajados en el proyecto, un marco legal colombiano y un paso a paso de cómo
          pedir información. A su vez da a conocer el archivo digital existente en Colombia, y la información contenida en ellos que posiblemente
          sea útil para activistas de género.</p>
        </div>
      </div>
    </div>

  );
}

export default About;
