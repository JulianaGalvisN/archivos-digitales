import React from 'react';
import Banner from './Banner';
import este_manual from '../images/bannernuevo-07.png';
import '../css/About.css';

function About(props) {
  return (
    <div className="About">
      <Banner upperTitle="Este" lowerTitle="manual" bgImage={este_manual} />
      <div className="About-text">
        <div className="About-section">
          <div class="About-section-content">
            <h2 className="About-headline title rotated">¿Qué es?</h2>
            <div className="paragraph">
              <p>
                Este manual busca brindar recursos sobre el archivo digital
                existente en Colombia y su posible uso por parte de activistas
                de mujeres y LGBT en Colombia.
              </p>
              <p>
                Contiene una lista de activistas de mujeres y LGBT en Colombia
                y una línea de tiempo de hitos del activismo en el país, una
                herramienta que permite explorar todos los archivos digitales
                existentes en Colombia con información sobre su uso, unos
                marcos de referencia sobre la legislación existente en Colombia
                respecto a archivos, algunos conceptos trabajados en el
                proyecto, entre otros, y por último, una metodología más
                esquemática sobre cómo identificar información relevante en
                cada archivo digital.
              </p>
          </div>
          </div>
        </div>
        <div className="About-section About-section--right">
          <h2 className="About-headline title">Acerca de</h2>
          <div className="paragraph">
            <p>
              La disponibilización de este material responde a tres procesos de
              recolección de fuentes primarias, el primero consistió en la
              recolección de fuentes académicas sobre los conceptos de archivo,
              archivo digital, activismo de mujeres y LGBT, y archivo con
              enfoque de género. El segundo es una base de datos con información
              sobre los archivos digitales existentes en Colombia y cómo obtener
              insumos relevantes de cada uno, sobre activistas y organizaciones
              que realizan activismo en Colombia, y sobre los hechos históricos
              más importantes del activismo de género en el país. Y por último,
              en la fase final del proyecto hubo una recolección de información
              a través de entrevistas a activistas de mujeres y LGBT, cuya
              participación permitió indagar desde su perspectiva y lucha
              social, asuntos relacionados al ejercicio de su activismo y cómo a
              éste le puede interesar o serle útil el archivo digital.
            </p>
          </div>
        </div>

        <div className="About-section">
          <h2 className="About-headline title">Diseño y desarrollo web</h2>
          <div className="paragraph">
            <p>
              Este proyecto se ha realizado con material gráfico de dominio
              público y utilizando licencias Creative Commons. La imágen de
              inicio referente a María Cano, es una composición tipo collage de
              varias imágenes gráficas, la fotografía se llama María de los
              Ángeles Cano Márquez, 1926. Fotografía Rodríguez. Colección
              Biblioteca Pública Piloto. Tomada de: Revista Credencial Historia,
              N°280.
            </p>
            <p>
              Las fotografías divulgadas en el proyecto fueron tomadas por
              Andrés Callejas en la marcha del Día Internacional de la Mujer
              Trabajadora del 8 de Marzo de 2020.
            </p>
            <p>
              El desarrollo web se realizó utilizando la librería React JS de
              Facebook, que utiliza el lenguaje de programación de Javascript.
              El código y la documentación del proceso de investigación que
              acompañó el desarrollo de la aplicación web se encuentra abierto
              en el repositorio de{' '}
              <a href="https://github.com/JulianaGalvisN/archivos-digitales">
                Github
              </a>
              . Además, las bases de datos se encuentran abiertas y disponibles{' '}
              <a href="https://docs.google.com/spreadsheets/d/1rycxptkQFpQQaPsWwVcSqAvqu7LqnqA85XtT3RMPcGI/edit?usp=sharing">
                aquí
              </a>
              .
            </p>
          </div>
        </div>
        <div className="About-section">
          <h2 className="About-headline title">Citación</h2>
          <div className="paragraph">
          <p>
            El archivo digital para activistas de mujeres y LGBT en Colombia,
            Juliana Galvis Nieto, Bogotá, 2020,
            https://archivos-digitales.netlify.app/.
          </p>
          </div>
        </div>
        <div className="About-section About-section--right">
          <h2 className="About-headline title">Para qué se hace</h2>
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
        <div className="About-section">
          <h2 className="About-headline title">
            ¿Por qué es importante hablar de archivos digitales?
          </h2>
          <div className="paragraph">
            <p>
              Cuando se habla de archivos, usualmente se relacionan con la forma tradicional de recopilar información relevante, que consiste en una sola copia del documento (no digital) reunida en repositorios que contienen datos seleccionados para responder a diversos tipos de intereses. Pero ahora, es necesario posicionarse en la nueva era, que implica nuevas formas de ver los documentos y de relacionarse con ellos a través de los procesos de la digitalización. 
            </p>
            <p>
              Podríamos caracterizar los archivos digitales de acuerdo con
              determinadas características:
            </p>
            <p>
              - La información digital tiene el fin de ser preservada una mayor
              cantidad de tiempo, impidiendo el deterioro que normalmente
              tendría.
            </p>
            <p>
              - Se puede acceder a los distintos recursos desde cualquier
              dispositivo tecnológico conectado a través de internet.
            </p>
            <p>
              - Posibilita crear copias digitales con cámaras digitales o
              teléfonos inteligentes, lo que hace que cada vez sea mucho más
              fácil acceder al contenido de los archivos.
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
              recursos, es mucho más fácil administrarlo, y en general, permite
              un acceso mucho más democrático al conocimiento, con sólo hacer
              click.
            </p>
            <p>
              - Permite que exista una protección de la información más duradera
              a lo largo de los años. Que la información sobreviva más allá de
              lo físico.
            </p>
          </div>
        </div>

        <div className="About-section About-section--right">
          <h2 className="About-headline title">
            Archivo con enfoque de género
          </h2>
          <div className="paragraph">
            <p>
              El archivo con enfoque de género permite preservar el patrimonio
              de las mujeres, LGBT, y sus movimientos, para contribuir a la
              lucha histórica y constante emancipación de estas poblaciones
              vulneradas.
            </p>
            <p>
              Los avances para la consideración de un archivo con enfoque de
              género, se comenzaron a dar cuando las feministas consideraron las
              diferencias que había entre los espacios ocupados por mujeres y
              hombres en las esferas públicas y privadas. Mientras las mujeres
              eran llevadas a puntos de relacionamiento social privado (el
              hogar, la familia), el hombre era tomado en cuenta como un ente
              público (las calles, la política), y por lo tanto, era el objeto
              de estudio de los archivos históricos. Se hablaba del hombre
              heterosexual porque era el que creaba y producía la historia y el
              patrimonio de las sociedades.
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
              biblioteca y el archivo como espacios de creación de conocimiento,
              más allá de temas de recolección pasiva, sino también para
              relacionarse y construir conocimiento con cada vez más justicia
              social.
            </p>
          </div>
        </div>
        <div className="About-section">
          <h2 className="About-headline title">Agradecimientos</h2>
          <div className="paragraph">
            <p>
              Este proyecto se realiza gracias a las luchas de las y los
              activistas de mujeres y LGBT, que día a día y durante toda la
              historia han luchado porque tengamos los derechos de los que hoy
              gozamos.
            </p>
            <p>
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
