import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import marcos from '../images/marcos.png';
import '../css/marcos.css';

function Marcos(props) {
  return (
    <div className="marcos">
      <Banner
        title1="Marcos de"
        title2="referencia"
        bgImage={marcos}
        height="350px"
        margin="Banner margin"
      />

      <div className="headline-left">
        <h2 className="title">Conceptos generales</h2>
        <h3 className="subtitle">Archivo digital</h3>
        <div className="paragraph">
          <p>
            El archivo digital es entendido como todo el compilado de
            documentos creados o recibidos por alguna persona u organización
            que forman la realidad histórica, social y patrimonial de una
            sociedad, o simplemente como asuntos de gran valor para un conjunto
            social. Es el resultado de una serie de actos de unificación,
            identificación y clasificación de información de la realidad, es
            decir, cuenta su historia, los sucesos que la formaron, sus
            tradiciones patrimoniales, y en general todos los asuntos que la
            llevaron a ser lo que es en el presente. Sin embargo cabe la
            aclaración de que esta acción no es en ningún momento una ciencia
            exacta, hay toda una serie de personajes involucrados en ella que
            no debemos perder de vista porque siempre hay intereses en la
            información que se consigna allí.
          </p>
        </div>
        <h3 className="subtitle">Activismo de mujeres y LGBT</h3>
        <div className="paragraph">
          <p>
            El activismo de mujeres y LGBT se comprende como las acciones de
            individuos que carecen de influencia institucionalizada, que buscan
            romper con las construcciones ‘legitimadoras’ de las masculinidades
            y la heterosexualidad, y pretenden proponer cambios en el orden
            social existente.
          </p>
          <p>
            Lynda T Johnston (2016) se refiere al activismo como aquellos
            espacios y lugares de igualdad donde lo personal es político, y
            Briscoe y Gupta (2016) lo definen como aquellas instancias donde
            los grupos e individuos carecen de acceso total a canales de
            influencia institucionalizados, y por lo tanto participan de
            acciones colectivas para remediar el problema social percibido o
            para promover cambios en el orden social existente.
          </p>
          <p>
            Lo que nos lleva a plantear que el activismo parte de un deseo
            constante de crear espacios equitativos donde los cuerpos puedan
            desafiar los conocimientos, los espacios y lugares que han sido
            históricamente hegemónicos, para dar apertura a una vida personal y
            pública desafiante de los canales institucionales de influencia.
          </p>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline">
          <h2 className="title">Marco legal</h2>
          <h3 className="subtitle">
          <a href="https://mintic.gov.co/portal/604/articles-15049_documento.pdf" className="subtitle">
          Ley 954 del 2000
          </a>
          </h3>
          <div className="paragraph">
            <p>
              Dicha Ley establece unos principios básicos con los cuales se
              debe regir la función archivística: El objetivo de los archivos
              es disponer de una documentación organizada de tal forma que la
              información institucional sea recuperable, por lo tanto tiene
              como fines facilitar la participación de la comunidad y el
              control de la ciudadanía en las decisiones que los afecten. La
              importancia de los archivos consiste en una administración y
              cultura porque los documentos son imprescindibles para la toma de
              decisiones. Los archivos constituyen una herramienta
              indispensable para la gestión administrativa, económica, política
              y cultural. Y el Archivo General de la Nación es la entidad
              encargada de orientar y coordinar la función archivística.
            </p>
          </div>
          <h3 className="subtitle">
          <a href="https://mintic.gov.co/portal/604/articles-7147_documento.pdf" className="subtitle">
          Ley 1712 de 2014
          </a>
          </h3>
          <div className="paragraph">
            <p>
              Esta Ley hace referencia al derecho de acceso a la información
              pública, y los procesos de publicidad de la misma en Colombia.
              Parte de una serie de principios de transparencia y acceso a la
              información, tales como: la máxima publicidad de la misma, el
              principio de transparencia (los sujetos obligados deben
              proporcionarla y facilitarla en los términos más amplios
              posibles), principio de buena fé (los sujetos obligados deben
              cumplir con sus deberes de manera honesta, leal, libre de
              dolo y culpa), principio de facilitación, principio de no
              discriminación, de gratuidad, de celeridad, de eficacia, de
              calidad de la información, de divulgación proactiva de la
              información, y de responsabilidad en el uso de la información.
            </p>
          </div>
        </div>
      </div>

      <div className="headline-left">
        <h2 className="title">Cómo acceder a información</h2>
        <h2 className="title">pública</h2>
        <div className="paragraph">
          <p>
            De acuerdo a la Ley 1712 de 2014, o ley de Transparencia y Acceso a
            la Información Pública, el acceso a la información es un derecho
            fundamental.
          </p>
          <p>
            Toda la información que se necesite, se puede obtener por
            solicitudes directas a las entidades o personas. El mecanismo
            previsto para esto es el derecho de petición que se debe contestar
            en 10 días hábiles.
          </p>
          <p>
            Además de la información que se puede pedir directamente, hay otros
            documentos o datos que las entidades tienen en su página web o en
            las páginas de datos abiertos del Estado. Por lo que la información
            también puede ser encontrada en formatos electrónicos y de acceso
            rápido.
          </p>
          <p>
            Un recurso amplio para el acceso a la información pública puede ser
            consultado
            <a href="https://flip.org.co/index.php/es/publicaciones/manuales/item/1660-manual-de-acceso-la-informacion-publica"> aquí</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Marcos;
