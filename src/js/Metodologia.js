import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import '../css/Metodologia.css';
import metodologia from '../images/metodologia.png';

function Metodologia(props) {
  return (
    <div className="Metodologia">
      <Navbar />

      <Banner
        title1="Metodología"
        bgImage={metodologia}
        height="350px"
        margin="Banner margin"
      />

      <div className="headline-left">
        <h2 className="title">¿Cómo identificar un</h2>
        <h2 className="title">archivo digital?</h2>
        <div className="paragraph">
          <p>
            Un archivo digital se puede entender como una unidad de datos o de
            información que puede ser leída por alguna computadora. Por lo
            tanto, una clave fundamental para identificarlos está en si se puede
            acceder a los documentos mediante una página web -no todos los
            archivos digitales permiten acceso mediante la web, pero sí la
            mayoría de ellos-.
          </p>
          <p>
            Todos los archivos digitales tienen una extensión que determina el
            tipo de caracteres (el formato) que contiene la información que se
            encuentra almacenada en ellos. Puede ser una información de solo
            texto con extensión .txt, una imagen .png o .jpg, entre otras.
          </p>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline">
          <h2 className="title">¿Cómo identificar el tipo</h2>
          <h2 className="title">de información?</h2>
          <div className="paragraph">
            <p>
              Es válido aclarar que todos los archivos tienen una estructura
              distinta, y por lo tanto no es posible determinar un paso a paso
              ideal o completo para todos ellos. Por lo tanto, es fundamental
              explorar cada uno de ellos desde las perspectiva de búsqueda de
              información deseada. A continuación presentaré unos tips que yo he
              recopilado para la investigación de este proyecto al identificar
              el tipo de información que nos interesa en un archivo digital:
            </p>
            <p>
              1. No descartar los archivos que tienen información general, como
              el Archivo General de la Nación o la Red Nacional de Bibliotecas
              Públicas, ya que estos pueden contener información útil. En estos
              casos debe poderse realizar búsquedas y filtros de información de
              utilidad para la usuaria.
            </p>
            <p>
              2. Revisar toda la estructura de la página web del archivo, en
              ella se podrá localizar la información relevante o potencialmente
              relevante que se desea conseguir. Especialmente se pueden explorar
              las secciones llamadas “archivo digital”, “fondos documentales”,
              “consulta web”, “memoria”, “patrimonio”, “biblioteca en línea”,
              “catálogo en línea”, entre otras.
            </p>
            <p>
              3. Los documentos que son encontrados en el archivo, pero con los
              que no hay plena seguridad de que sean verdaderamente útiles para
              nuestras indagaciones contienen un índice o tabla de contenido que
              puede brindar mayor información sobre el tema de interés.
            </p>
            <p>
              4. Cuando se encuentran dentro de las páginas web algunas opciones
              de búsqueda de información (como una barra o un menú de búsqueda),
              se utilicen palabras clave en relación al tema de exploración.
              Algunas de estas palabras clave pueden ser: mujer, activismo de
              género, género, lgbt, gay, homosexual, transexual, transgénero,
              feminismo, activismo feminista, activismo lgbt, activismo gay,
              activismo homosexual, activismo transgénero, entre otras.
            </p>
            <p>
              5. No descartar que es posible realizar derechos de petición de
              información, ya que puede darse la posibilidad que la información
              necesitada sí exista pero no se encuentre disponible en la web. En
              ese caso la entidad pública debe brindar la información de acuerdo
              a los parámetros de la Ley 1712 de 2014.
            </p>
          </div>
        </div>
      </div>

      <div className="headline-left">
        <h2 className="title">Analizar información</h2>
        <h2 className="title">con enfoque en género</h2>
        <div className="paragraph">
          <p>
            La perspectiva de género se refiere a la mirada sobre la realidad de
            la opresión de distintos componentes sociales, que nos permite
            detectar diferencias en las vidas, experiencias y problemas que se
            derivan de la construcción de género, y que nos permite tratar de
            atender o adaptar nuestras acciones a tales diferencias. Esta
            posición nos permite cuestionarnos sobre supuestos que al parecer
            son objetivos y universales, cuestionando el rol de la información y
            el archivo en la perpetuación de opresiones y desigualdades, con
            miras a elaborar nuevos contenidos que revisen estos supuestos que
            permitan generar un cambio en la distribución de poder.
          </p>
          <p>
            La importancia de tomar en consideración las experiencias de los
            grupos históricamente excluidos de la recopilación de información,
            implica un cambio de lo entendemos como información pública, ya que
            los registros patrimoniales e históricos son el resultado de unas
            decisiones -en muchos casos arbitrarias o poco discutidas- sobre los
            contenidos de los mismos.
          </p>
          <p>
            Por lo tanto el análisis de información con enfoque de género
            permite ser una oportunidad de lucha contra la noción de que el
            lugar de las mujeres está en los espacios privados (la casa, la
            familia) y de que LGBT no deben tener espacios de ningún tipo, para
            reivindicar aquellas que decidieron enfrentarse a la arena pública
            de la política, las calles, la lucha social. Y así plantearle a los
            archivos y a las organizaciones que recopilaron estos archivos
            cuestionamientos sobre la recopilación y el uso de la información
            como los siguientes:
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
      </div>

      <div className="headline-container">
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
        </div>
      </div>
    </div>
  );
}

export default Metodologia;
