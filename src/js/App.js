import React from 'react';
import Banner from './Banner';
import linea_tiempo from '../images/bannernuevo-10.png';
import archivo from '../images/bannernuevo-09.png';
import activismo_img from '../images/activismo-home.png';
import cano from '../images/cano.png';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div className="App-home">
        <img className="App-home-image" src={cano} alt="Imagen de María Cano" />
        <div className="App-home-content">
          <div className="App-home-headline">
            <h2 className="title">Archivos</h2>
            <h2 className="title">digitales</h2>
            <h2 className="title">
              para activistas de mujeres y LGBT
            </h2>
          </div>
          <div className="App-home-text">
            <h3 className="title rotated">¿Qué es?</h3>
            <div className="paragraph">
              <p>
                Este proyecto es posible gracias a las luchas de las y los
                activistas de mujeres y LGBT, que día a día y durante toda la
                historia han luchado porque tengamos los derechos de los que hoy
                gozamos.
              </p>
              <p>
                Es una herramienta abierta que recopila información sobre
                archivos digitales en Colombia y ofrece un manual sobre cómo
                encontrar información útil en los archivos para apoyar el
                trabajo de activistas de mujeres y LGBT en el país.{' '}
              </p>
              <p>
                Esta herramienta contiene una lista de activistas de mujeres y
                LGBT en Colombia, una lista de todos los archivos digitales
                existentes en Colombia, unos marcos de referencia sobre la
                legislación existente en Colombia y por último una metodología
                sobre cómo identificar información relevante en cada archivo
                digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Banner
        upperTitle="Explora"
        lowerTitle="el archivo"
        link="/archivos"
        bgImage={archivo}
      />

      <div className="App-activism">
        <img
          className="App-activism-image"
          src={activismo_img}
          alt="Imagen de activismo de género"
        />
        <div className="App-activism-content">
          <div className="title-container">
            <h2 className="title">El activismo</h2>
            <h2 className="title">de mujeres y LGBT</h2>
          </div>
          <p className="paragraph">
            Se comprende como las acciones de individuos que carecen de
            influencia institucionalizada, que buscan romper con las
            construcciones ‘legitimadoras’ de las masculinidades y la
            heterosexualidad, y pretenden proponer cambios en el orden social
            existente.
          </p>
        </div>
      </div>

      <Banner
        upperTitle="Explora la línea"
        lowerTitle="de tiempo"
        link="/activismo"
        bgImage={linea_tiempo}
      />
    </div>
  );
}

export default App;
