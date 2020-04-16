import React from 'react';
import Banner from './Banner';
import este_manual from '../images/este-manual.png';
import '../css/About.css';

function About(props) {
  return (
    <div className="About">
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
          <p>
            Este manual se crea en el marco de un proyecto de investigación de
            maestría en Humanidades Digitales de la Universidad de Los Andes.
            Consiste en brindar recursos sobre el archivo digital existente en
            Colombia y su posible uso por parte de activistas de género en
            Colombia.
          </p>
          <p>
          Contiene una lista de activistas de mujeres y
          LGBT en Colombia, una lista de todos los
          archivos digitales existentes en Colombia, unos marcos de
          referencia sobre la legislación existente en Colombia y por
          último una metodología sobre cómo identificar información
          relevante en cada archivo digital.
          </p>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline">
          <h2 className="title">Para qué se hace</h2>
          <div className="paragraph">
            <p>
              El objetivo de este proyecto es brindar información y herramientas
              abiertas y verídicas sobre archivos digitales para que el
              activismo de género continúe proponiendo cambios en el orden
              social del país.
            </p>
            <p>
              Esto puesto que el archivo es un potencial generador de espacios
              públicos y abiertos al acceso a la información, pero ha sido
              excluyente de ciertas identidades en la historia de las
              sociedades, como lo son las mujeres y LGBT. Es por eso que para
              que dichas identidades tengan una voz y puedan luchar por sus
              derechos, el activismo en temas de género tiene la posibilidad de
              preservar su patrimonio a través de la entrada en espacios de
              recolección y divulgación de información como lo son los archivos
              digitales.
            </p>
            <p>
              Es por eso que el llamado de esta investigación con énfasis en
              activismo de género y de archivo, parte de la práctica de la
              historia a través de la producción de archivo y la importancia que
              ha supuesto la inclusión de quienes han sido excluidos de la
              historia y el patrimonio de las sociedades. Y más aún, busca crear
              formas de relacionamiento de este activismo, en lucha constante
              por la inclusión, con la producción histórica y patrimonial
              ofrecida por los archivos digitales.
            </p>
          </div>
        </div>
      </div>

      <div className="headline-left">
        <h2 className="title">¿Por qué es importante</h2>
        <h2 className="title">hablar de archivos digitales?</h2>
        <div className="paragraph">
          <p>
            Cuando se habla de archivos, usualmente se relacionan con la forma
             tradicional de recopilar información relevante, que consiste en
             una sola copia del documento (no digital) reunida en repositorios
             que contienen datos seleccionados para responder a diversos tipos
             de intereses. Pero ahora, es necesario posicionarse en la nueva
             era, que implica nuevas formas de ver los documentos y de
             relacionarse con ellos a través de los procesos de la
             digitalización.
          </p>
          <p>
            Podríamos caracterizar los archivos digitales de acuerdo con
            determinadas características:
          </p>
          <p>
            - La información digital tiene el fin de ser preservada una mayor
            cantidad de tiempo, impidiendo el deterioro que normalmente tendría.
          </p>
          <p>
            - Se puede acceder a los distintos recursos desde
            cualquier dispositivo tecnológico conectado a través de internet.
          </p>
          <p>
            - Posibilita crear copias digitales con cámaras digitales o
            teléfonos inteligentes, lo que hace que cada vez sea mucho más fácil
            acceder al contenido de los archivos.
          </p>
          <p>
            - Brinda la posibilidad de describir en línea de qué se trata cada
            uno de los documentos allí consignados, y facilita la búsqueda de
            información a partir de catálogos en línea y sus buscadores.
          </p>
          <p>- Permite compartir información de manera fácil y rápida. </p>
          <p>
            - Un sólo ejemplar del archivo puede ser visto por muchas personas
            alrededor del mundo de manera simultánea, se pueden imprimir los
            recursos, es mucho más fácil administrarlo, y en general, permite un
            acceso mucho más democrático al conocimiento, con sólo hacer click.
          </p>
          <p>
            - Permite que exista una protección de la información más duradera a
            lo largo de los años. Que la información sobreviva más allá de lo
            físico.
          </p>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline">
          <h2 className="title">Archivo con enfoque de género</h2>
          <div className="paragraph">
            <p>
              El archivo con enfoque de género permite preservar el patrimonio
              de las mujeres, LGBT, y sus movimientos, para contribuir a la
              lucha histórica y constante emancipación de estas poblaciones
              vulneradas.
            </p>
            <p>
              Los avances para la consideración de un archivo con enfoque de
              género, se comenzaron a dar cuando las feministas consideraron
              las diferencias que había entre los espacios ocupados por mujeres
              y hombres en las esferas públicas y privadas. Mientras las mujeres
              eran llevadas a puntos de relacionamiento social privado (el
              hogar, la familia), el hombre era tomado en cuenta como un ente
              público (las calles, la política), y por lo tanto, era el
              objeto de estudio de los archivos históricos. Se hablaba del
              hombre heterosexual porque era el que creaba y producía la
              historia y el patrimonio de las sociedades.
            </p>
            <p>
              Las mujeres han sido excluidas de los registros públicos y además,
              cuando se nombran sólo se incluye su trabajo político y de caridad
              a menudo vinculado al bienestar de la niñez, las personas pobres,
              discapacitadas, ancianas, marginadas y sin educación, y no dentro
              de su labor política como activistas o defensoras de los derechos
              de las mujeres. Las personas LGBT ni siquiera son contadas en los
              registros de información de acuerdo a su identidad de género u
              orientación sexual.
            </p>
            <p>
              Es por eso que el archivismo con enfoque de género se ha puesto a
              la tarea de construir nuevas realidades y espacios de
              discursividad en los registros información, esto es considerar la
              biblioteca y el archivo como espacios de creación de
              conocimiento, más allá de temas de recolección pasiva, sino
              también para relacionarse y construir conocimiento con cada vez
              más justicia social.
            </p>
          </div>
        </div>

        <div className="headline-left">
          <h2 className="title">Agradecimientos</h2>
          <div className="paragraph">
            <p>
              {' '}
              Este proyecto se realiza gracias a las luchas de las y los
              activistas de mujeres y LGBT, que día a día y durante toda la
              historia han luchado porque tengamos los derechos de los que hoy
              gozamos.{' '}
            </p>
            <p>
              {' '}
              Agradecimientos especiales a Mariana Villamizar, David Daza, Maria
              José Afanador y las activistas entrevistadas para este proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
