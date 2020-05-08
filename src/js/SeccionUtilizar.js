import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import metodologia from '../images/bannernuevo-11.png';
import '../css/SeccionMetodologia.css';

function SeccionUtilizar(props) {
  return (
    <div className="SeccionMetodologia">
      <Banner
        upperTitle="Qué hacer"
        lowerTitle="con el archivo"
        bgImage={metodologia}
      />

      <div className="headline">
        <h2 className="title">Utilizar información para</h2>
        <h2 className="title">hacer activismo de género</h2>
        <div className="paragraph">
              <p>
                El uso de información sobre la historia y el patrimonio de
                poblaciones a las que no se les ha reconocido plenamente su lucha
                y reivindicaciones, implica poder tener cada vez más herramientas
                de registro de la información ocurrida en el pasado, y generar
                acciones de activismo en el presente (como aquellas que permiten
                recordar eventos, personajes o fechas importantes).
              </p>
              <p>
                La forma de hacer activismo a través del uso de información, es
                concebida desde las Humanidades Digitales como un mecanismo
                discursivo que contribuye al cambio en la realidad social. Entre
                más exista información disponible, abierta y fácilmente
                utilizable, será mucho más sencillo para el activismo tomar
                decisiones y actuar en torno a ello. Ya que el activismo ha
                demostrado ser un gran interlocutor entre la teoría o el documento
                oficial y la misma ciudadanía que recibe información.
              </p>
              <p>
                Algunas preguntas que podría hacerse el activismo de género al
                utilizar información del archivo son:
              </p>
              <p>
                {' '}
                - ¿Cuál es la información que más me interesa saber del archivo?
                ¿Puedo filtrar la información que más me interesa?
              </p>
              <p>
                {' '}
                - ¿Es difícil acceder a la información de mi interés a través de
                los archivos?
              </p>
              <p>
                {' '}
                - ¿No existe la información que me interesa en los archivos? ¿Vale
                la pena construir un archivo para que haya un entendimiento del
                tema que me interesa?
              </p>
              <p>
                {' '}
                - ¿Esta es información nueva para mí y la puedo utilizar para
                continuar mi activismo?
              </p>
              <p>
                {' '}
                - ¿Esta información la puedo dar a conocer a través de los medios
                digitales o análogos que uso para brindar información a la
                ciudadanía?
              </p>
              <p>
                {' '}
                - ¿Esta información no la sabe el conjunto social y necesita
                saberlo? ¿Puedo llevar a cabo una lucha para que esta información
                se dé a conocer?
              </p>
              <p>
                {' '}
                - ¿La información es difícil de comprender y necesita ser
                traducida a unos formatos mucho más comprensibles?
              </p>
          </div>
          <Link to="/metodologia" className="Banner-link">
            Volver
          </Link>
        </div>
    </div>
  );
}

export default SeccionUtilizar;
