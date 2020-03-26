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

      <div className="top">
        <div className="imagetop">
          <img src={cano} alt="Imagen de María Cano"/>
        </div>
        <div className="texttop">
          <div className="headlinetop">
              <h2 className="title3">
              Archivos
              </h2>
              <h2 className="title4">
              digitales
              </h2>
          </div>
          <div className="headline2">
            <h2 className="title5">
            para activistas de género
            </h2>
          </div>
        </div>
        <div className="descriptiontop">
          <h2 className="titledescriptiontop">
          ¿Qué es?
          </h2>
          <p>
          Este manual se crea en el marco de un proyecto de investigación de maestría en Humanidades Digitales de la Universidad de Los Andes. Consiste en brindar recursos sobre el archivo digital existente en Colombia y su posible uso por parte de activistas de género en Colombia.
          </p>
          <p>
          Contiene un marco de referencia con los conceptos trabajados en el proyecto, un marco legal colombiano y un paso a paso de cómo pedir información. A su vez da a conocer el archivo digital existente en Colombia, y la información contenida en ellos que posiblemente sea útil para activistas de género.
          </p>
        </div>
      </div>

      <Banner
      title1="Explora"
      title2="el archivo"
      link="/archivos"
      bgImage={archivo}
      height="455px"/>

      <div className="bottom">
        <div className="image">
          <img src={activismo_img} alt="Imagen de activismo de género"/>
        </div>
        <div className="text">
          <div className="headline">
            <h2 className="title1">
            El activismo
            </h2>
            <h2 className="title2">
            de género
            </h2>
          </div>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- mcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <p className="paragraph">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feu giat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>


      <Banner
      title1="Explora la línea"
      title2="de tiempo"
      link="/activismo"
      bgImage={linea_tiempo}
      height="455px"/>

      <Footer/>

    </div>
  );
}

export default App;
