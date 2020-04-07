import React from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
import '../css/About.css'
import este_manual from '../images/este-manual.png'

function About(props) {
  return (
    <div className="About">

      <Navbar/>

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
          <p>Este manual se crea en el marco de un proyecto de investigación de maestría en Humanidades Digitales de la Universidad de Los Andes.
          Consiste en brindar recursos sobre el archivo digital existente en Colombia y su posible uso por parte de activistas de género en Colombia.</p>
          <p>Contiene un marco de referencia con los conceptos trabajados en el proyecto, un marco legal colombiano y un paso a paso de cómo
          pedir información. A su vez da a conocer el archivo digital existente en Colombia, y la información contenida en ellos que posiblemente
          sea útil para activistas de género.</p>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline">
          <h2 className="title">Para qué se hace</h2>
          <div className="paragraph">
            <p>El objetivo de este proyecto es brindar información y herramientas abiertas y verídicas sobre archivos digitales para que el activismo de género continúe proponiendo cambios en el orden social del país.</p>
            <p>Esto puesto que el archivo es un potencial generador de espacios públicos y abiertos al acceso a la información, pero ha sido excluyente de ciertas identidades no tomadas en cuenta en la historia de las sociedades, como lo son las mujeres y LGBT. Es por eso que para que dichas identidades tengan una voz y puedan luchar por sus derechos, el activismo en temas de género debe preservar su patrimonio a través de la entrada en espacios de recolección y divulgación de información como lo son los archivos digitales.</p>
            <p>Es por eso que el llamado de esta investigación con énfasis en activismo de género y de archivo, parte de la práctica de la historia a través de la producción de archivo y la importancia que ha supuesto la inclusión de quienes han sido excluidos de la historia y el patrimonio de las sociedades. Y más aún, busca crear formas de relacionamiento de este activismo, en lucha constante por la inclusión, con la producción histórica y patrimonial ofrecida por los archivos digitales.</p>
            <p>A su vez, busca contribuir a la lucha por el acceso a la información pública que hace parte fundamental de la activa participación de la ciudadanía en diversos temas públicos</p>
          </div>
        </div>
      </div>

      <div className="headline">
          <h2 className="title">¿Por qué es importante</h2>
          <h2 className="title">hablar de archivos digitales?</h2>
          <div className="paragraph">
            <p>El objetivo de este proyecto es brindar información y herramientas abiertas y verídicas sobre archivos digitales para que el activismo de género continúe proponiendo cambios en el orden social del país.</p>
            <p>Esto puesto que el archivo es un potencial generador de espacios públicos y abiertos al acceso a la información, pero ha sido excluyente de ciertas identidades no tomadas en cuenta en la historia de las sociedades, como lo son las mujeres y LGBT. Es por eso que para que dichas identidades tengan una voz y puedan luchar por sus derechos, el activismo en temas de género debe preservar su patrimonio a través de la entrada en espacios de recolección y divulgación de información como lo son los archivos digitales.</p>
            <p>Es por eso que el llamado de esta investigación con énfasis en activismo de género y de archivo, parte de la práctica de la historia a través de la producción de archivo y la importancia que ha supuesto la inclusión de quienes han sido excluidos de la historia y el patrimonio de las sociedades. Y más aún, busca crear formas de relacionamiento de este activismo, en lucha constante por la inclusión, con la producción histórica y patrimonial ofrecida por los archivos digitales.</p>
            <p>A su vez, busca contribuir a la lucha por el acceso a la información pública que hace parte fundamental de la activa participación de la ciudadanía en diversos temas públicos</p>
        </div>
      </div>
    </div>
  );
}

export default About;
