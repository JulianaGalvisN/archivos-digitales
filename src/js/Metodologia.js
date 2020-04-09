import React from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Metodologia.css'
import metodologia from '../images/metodologia.png'


function Metodologia(props) {
  return (

    <div className="Metodologia">

      <Navbar/>

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
                <p></p>
              </div>
        </div>

        <div className="headline-container">
          <div className="headline">
            <h2 className="title">¿Cómo identificar el tipo</h2>
            <h2 className="title">de información?</h2>
                <div className="paragraph">
                  <p></p>
                </div>
          </div>
        </div>

        <div className="headline-left">
            <h2 className="title">Analizar información</h2>
            <h2 className="title">con enfoque en género</h2>
                <div className="paragraph">
                  <p></p>
                </div>
        </div>

        <div className="headline-container">
          <div className="headline">
            <h2 className="title">Utilizar información para</h2>
            <h2 className="title">hacer activismo de género</h2>
                <div className="paragraph">
                  <p></p>
                </div>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Metodologia;
