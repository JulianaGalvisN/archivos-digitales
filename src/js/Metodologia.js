import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import metodologia from '../images/bannernuevo-11.png';
import '../css/Metodologia.css';

function Metodologia(props) {
  return (
    <div className="Metodologia">
      <Banner
        upperTitle="Qué hacer"
        lowerTitle="con el archivo"
        bgImage={metodologia}
      />
      <div className="links">
        <div className="link-container">
          <h2 className="title">¿Cómo identificar</h2>
          <h2 className="title">el tipo de</h2>
          <h2 className="title">información?</h2>
          <Link to="/metodologia/identificar" className="Banner-link">Ver</Link>
        </div>

        <div className="link-container">
          <h2 className="title">Analizar</h2>
          <h2 className="title">información con</h2>
          <h2 className="title">enfoque en género</h2>
          <Link to="/metodologia/analizar" className="Banner-link">Ver</Link>
        </div>

        <div className="link-container">
          <h2 className="title">Utilizar</h2>
          <h2 className="title">información para hacer</h2>
          <h2 className="title">activismo de género</h2>
          <Link to="/metodologia/utilizar" className="Banner-link">Ver</Link>
        </div>
      </div>
    </div>
  );
}

export default Metodologia;
