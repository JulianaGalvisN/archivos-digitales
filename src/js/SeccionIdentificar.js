import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import metodologia from '../images/bannernuevo-11.png';
import '../css/SeccionMetodologia.css';

function SeccionIdentificar(props) {
  return (
    <div className="SeccionMetodologia">
      <Banner
        upperTitle="Qué hacer"
        lowerTitle="con el archivo"
        bgImage={metodologia}
      />

      <div className="headline">
        <h2 className="title">¿Cómo identificar el tipo</h2>
        <h2 className="title">de información?</h2>
        <div className="paragraph">
          <p>
            Todos los archivos tienen una estructura distinta y por lo tanto no es posible determinar un paso a paso ideal o completo para todos ellos. Es fundamental explorar cada uno desde las búsquedas deseadas de información. A continuación presentaré unas recomendaciones que yo he recopilado para la investigación de este proyecto, para identificar el tipo de información que nos interesa en un archivo digital:
          </p>
          <p>
            1. No descartar los archivos que tienen información general, como el Archivo General de la Nación o la Red Nacional de Bibliotecas Públicas, ya que estos pueden contener información útil. En estos casos debe poderse realizar búsquedas y filtros de información  de utilidad para quien los utilice.
          </p>
          <p>
            2. Revisar toda la estructura de la página web del archivo, en ella se podrá localizar la información relevante o potencialmente relevante que se desea conseguir. Especialmente se pueden explorar las secciones llamadas “archivo digital”, “fondos documentales”, “consulta web”, “memoria”, “patrimonio”, “biblioteca en línea”, “catálogo en línea”, entre otras.
          </p>
          <p>
            3. Los documentos que son encontrados en el archivo, pero con los que no hay plena seguridad de que sean verdaderamente útiles para nuestras indagaciones, contienen un índice o tabla de contenido que puede brindar mayor información sobre el tema de interés.
          </p>
          <p>
            4. Cuando se encuentran dentro de las páginas web algunas opciones de búsqueda de información -como una barra o un menú de búsqueda-, se pueden utilizar palabras clave en relación al tema de exploración. Algunas de estas palabras clave pueden ser: mujer, activismo de género, género, lgbt, gay, homosexual, transexual, transgénero, feminismo, activismo feminista, activismo lgbt, activismo gay, activismo homosexual, activismo transgénero, entre otras.
          </p>
          <p>
            5. No descartar que es posible realizar derechos de petición de información, ya que puede darse la posibilidad que la información necesitada sí exista pero no se encuentre disponible en la web. Esto solo aplicaría si el archivo es de carácter público. En ese caso la entidad pública debe brindar la información de acuerdo a los parámetros de la Ley 1712 de 2014.
          </p>
        </div>
        <Link to="/metodologia" className="Banner-link">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default SeccionIdentificar;
