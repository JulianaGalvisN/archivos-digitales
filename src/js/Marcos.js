import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import '../css/marcos.css'
import marcos from '../images/marcos.png'

function Marcos(props) {
  return (
    <div className="marcos">

      <Navbar/>

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
                <p>El archivo digital es entendido como todo el compilado de documentos creados o recibidos por alguna persona u organización que forman la realidad histórica y patrimonial de una sociedad, o simplemente como asuntos de gran valor relacionados con alguna persona u organización. Es el resultado de una serie de actos de unificación, identificación y clasificación de información, generador de toda una realidad social, es decir, cuenta su historia, los sucesos que la formaron, sus tradiciones patrimoniales, y en general todos los asuntos que la llevaron a ser lo que es en el presente. Sin embargo cabe la aclaración de que esta acción no es en ningún momento una ciencia exacta, hay toda una serie de personajes involucrados en ella que no debemos perder de vista porque siempre hay intereses en la información que se consigna en el mismo.</p>
                <p>Los registros digitales son la transformación de los archivos físicos tradicionales en elementos propios de accesibilidad y conservación. Ya no se habla entonces de objetos físicos a los que se busca y se cuida, sino a información que se puede manipular tal que no tenga el deterioro regular de un documento físico, posibilita la creación de copias, un solo ejemplar puede ser visto por muchas personas alrededor del mundo de manera simultánea, permite que la información sea durable en el tiempo, entre otras.</p>
              </div>
            <h3 className="subtitle">Género</h3>
              <div className="paragraph">
                <p>Se puede partir de sus definiciones formales como la de la RAE, que lo describe como el “Grupo al que pertenecen los seres humanos de cada sexo, entendido este desde el punto de vista sociocultural en lugar de exclusivamente biológico”. También puede ser, tal como lo describió Gayle Rubin en 1986 como las disposiciones por las que una sociedad transforma la sexualidad biológica en asuntos de satisfacción de la actividad humana. Este sistema es expuesto como un sexo que se relaciona con la biología y un género que se relaciona con la cultura, es decir, el sexo que es biológicamente determinado y el género que es una construcción social.</p>
                <p>El género tal como lo afirma Joan Scott (1996) es principalmente una constitución de relaciones basadas en asuntos corporales y de trascendencia biológica, pero también es una forma de constitución de poder, que es determinante en las relaciones sociales y la forma en que los individuos se desenvuelven en su sociedad.</p>
                <p>Por lo tanto lo que es socialmente constituido como mujer u hombre es todo un producto del lenguaje usado para generar atributos específicos a un género, y que no siempre se constituye de la manera correcta, y en los contextos históricos correctos, porque el género por sí mismo confluye relaciones raciales, de clase, sexuales y regionales. Esta cuestión no sólo se refiere al estudio de la dicotomía mujer/hombre en sus relaciones de poder, sino también de la interseccionalidad de estas relaciones en todos los aspectos de la vida de las sociedades.</p>
              </div>
            <h3 className="subtitle">Activismo de género</h3>
              <div className="paragraph">
                <p>El activismo de género se comprende como las acciones de individuos que carecen de influencia institucionalizada, que buscan romper con las construcciones ‘legitimadoras’ de las masculinidades y la heterosexualidad, y pretenden proponer cambios en el orden social existente.</p>
                <p>Lynda T Johnston (2016) se refiere al activismo de género como aquellos espacios y lugares de igualdad donde lo personal es político, y Briscoe y Gupta (2016) lo definen como aquellas instancias donde los grupos e individuos carecen de acceso total a canales de influencia institucionalizados, y por lo tanto participan de acciones colectivas para remediar el problema social percibido o para promover cambios en el orden social existente.</p>
                <p>Lo que nos lleva a plantear que el activismo parte de un deseo constante de crear espacios equitativos donde los cuerpos puedan desafiar los conocimientos, los espacios y lugares que han sido históricamente hegemónicos, para dar apertura a una vida personal y pública desafiante de los canales institucionales de influencia.</p>
              </div>
        </div>

        <div className="headline-container">
          <div className="headline">
            <h2 className="title">Marco legal</h2>
              <h3 className="subtitle">Ley 954 del 2000</h3>
                <div className="paragraph">
                  <p>Se define el archivo como el conjunto de documentos acumulados en un proceso natural por una persona o entidad pública o privada, conservados respetando un orden de servir como testimonio e información histórica a la persona o institución que lo crea. También se puede entender como la institución misma que está al servicio de la gestión administrativa de dicha información.</p>
                  <p>Dicha Ley establece unos principios básicos con los cuales se debe regir la función archivística: El objetivo de los archivos es disponer de una documentación organizada de tal forma que la información institucional sea recuperable, por lo tanto tiene como fines facilitar la participación de la comunidad y el control de la ciudadanía en las decisiones que los afecten; la importancia de los archivos consiste en una administración y cultura porque los documentos son imprescindibles para la toma de decisiones; los archivos constituyen una herramienta indispensable para la gestión administrativa, económica, política y cultural; y el Archivo General de la Nación es la entidad encargada de orientar y coordinar la función archivística.</p>
                  <p>Establece además el Sistema Nacional de Archivos que son las instituciones de archivos articuladas entre sí que posibilitan la homogeneización y normalización de los procesos archivísticos</p>
                </div>
              <h3 className="subtitle">Ley 1712 de 2014</h3>
                <div className="paragraph">
                  <p>Esta Ley hace referencia al derecho de acceso a la información pública, y los procesos de publicidad de la misma en Colombia. Parte de una serie de principios de transparencia y acceso a la información, tales como la máxima publicidad de la misma, el principio de transparencia (los sujetos obligados deben proporcionarla y facilitarla en los términos más amplios posibles), principio de buena fé (los sujetos obligados deben cumplir con sus deberes de manera honesta, leal, libre de dolo y culpa), principio de facilitación, principio de no discriminación, de gratuidad, de celeridad, de eficacia, de calidad de la información, de divulgación proactiva de la información, y de responsabilidad en el uso de la información.</p>
                </div>
          </div>
        </div>

        <div className="headline-left">
            <h2 className="title">Cómo pedir información</h2>
                <div className="paragraph">
                  <p>De acuerdo a la ley 1712 de 2014, o ley de Transparencia y Acceso a la Información Pública, el acceso a la información es un derecho fundamental.</p>
                  <p>Toda la información que se necesite, se puede obtener por solicitudes directas a las entidades o personas. El mecanismo previsto para esto es el derecho de petición que se debe contestar en 10 días hábiles.</p>
                  <p>Además de la información que se puede pedir directamente, hay otros documentos o datos que las entidades tienen en su página web o en las páginas de datos abiertos del Estado. Por lo que la información también puede ser encontrada en formatos electrónicos y de acceso rápido.</p>
                  <p>En caso de que la respuesta a la solicitud de información se realice de manera incompleta, no responden dentro de los 20 días hábiles, cobran por la misma o dicen que no están obligados a entregarla (a menos de que sea información cuya restricción sea legítima dentro de la Ley 1712 de 2014), es posible realizar una acción de tutela.</p>
                  <p>Un recurso para el acceso a la información pública puede ser consultado [aquí](https://flip.org.co/index.php/es/publicaciones/manuales/item/1660-manual-de-acceso-la-informacion-publica).</p>
                </div>
        </div>

        <Footer/>

    </div>
  );
}

export default Marcos;
