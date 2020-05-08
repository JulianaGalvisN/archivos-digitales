import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import metodologia from '../images/bannernuevo-11.png';
import '../css/SeccionMetodologia.css';

function SeccionAnalizar(props) {
  return (
    <div className="SeccionMetodologia">
      <Banner
        upperTitle="Qué hacer"
        lowerTitle="con el archivo"
        bgImage={metodologia}
      />

      <div className="headline">
        <h2 className="title">Analizar información</h2>
        <h2 className="title">con enfoque en género</h2>
        <div className="paragraph">
          <p>
          La perspectiva de género se refiere a la mirada sobre la realidad de la opresión de distintos componentes sociales, que nos permite detectar diferencias en las vidas, experiencias y problemas que se derivan de la construcción de género, para tratar de atender o adaptar nuestras acciones a tales diferencias. Esta posición nos brinda la posibilidad de cuestionarnos sobre supuestos que al parecer son objetivos y universales sobre el rol de la información y el archivo en la perpetuación de opresiones y desigualdades, con miras a elaborar nuevos contenidos que revisen estos supuestos que permitan generar un cambio en la distribución del poder.
          </p>
          <p>
          La importancia de tomar en consideración las experiencias de los grupos históricamente excluidos de la recopilación de información implica un cambio de lo entendemos como información pública, ya que los registros patrimoniales e históricos son el resultado de unas decisiones -en muchos casos arbitrarias o poco discutidas- sobre los contenidos de los mismos.
          </p>
          <p>
          Por lo tanto el análisis de información con enfoque de género es una oportunidad de lucha contra la noción de que el lugar de las mujeres está en los espacios privados (la casa, la familia) y de que LGBT no deben tener espacios de ningún tipo. Además reivindica aquellas personas que decidieron enfrentarse a la arena pública de la política, las calles y la lucha social. Y así plantearle a los archivos y a las organizaciones que los recopilaron cuestionamientos sobre la selección y uso de la información como los siguientes:
          </p>
          <p> - ¿Quién recopiló la información del archivo?</p>
          <p>
            {' '}
            - ¿Qué organización está detrás de la información contenida en el
            archivo?
          </p>
          <p>
            {' '}
            - ¿El equipo que recopiló la información está o estuvo plenamente
            capacitado en registrar información con enfoque de género?
          </p>
          <p> - ¿Cuál es el contexto en el que se recopila la información?</p>
          <p> - ¿Hay diversidad en el equipo que recopiló la información?</p>
          <p>
            {' '}
            - ¿Qué tipo de lenguaje se está usando? ¿Se está usando al hombre
            como objeto fundamental de la historia y el patrimonio?
          </p>
          <p> - El archivo perpetúa estereotipos sobre mujeres y LGBT.</p>
          <p> - ¿El archivo tiene una sección con información sobre género?</p>
        </div>
        <Link to="/metodologia" className="Banner-link">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default SeccionAnalizar;
