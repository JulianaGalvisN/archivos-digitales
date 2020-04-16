import React from 'react';
import Banner from './Banner';
import activismo from '../images/activismo.png';
import '../css/activismo.css';

function Activismo(props) {
  return (
    <div className="activismo">
      <Banner
        title1="Activismo"
        title2="de mujeres y LGBT"
        bgImage={activismo}
        height="350px"
        margin="Banner margin"
      />

      <div className="paragraph">
        <p>
          Para conocer un poco sobre el activismo de mujeres y LGBT en
          Colombia, te invitamos a conocer la línea de tiempo de hechos
          históricos importantes en Colombia.
        </p>
        <p>
          Si quieres explorar una lista de activistas de mujeres y LGBT, te
          invitamos a filtrar por tema o utilizar la barra buscadora.
        </p>
        <p>
        Si deseas cambiar, adicionar o quitar información de esta sección
        por favor comunícate al correo julianagalvisn@gmail.com
        </p>
        <p>
        Para acceder a la base de datos completa, puedes dar click
        </p>
        <a href="https://docs.google.com/spreadsheets/d/1rycxptkQFpQQaPsWwVcSqAvqu7LqnqA85XtT3RMPcGI/edit?usp=sharing" className="link">
        Aquí
        </a>
      </div>

      <iframe
        title="Timeline"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1XNkzcy7NfNLeE6pEY50m2-PynjeAdBJxFQw0-I_HaWs&font=Default&lang=en&initial_zoom=2&height=650"
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Activismo;
