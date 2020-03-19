import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/reset.css';
import '../css/App.css'
import linea_tiempo from '../images/linea_tiempo.png'
import archivo from '../images/archivo.png'
import activismo_img from '../images/activismo-home.png'


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Banner
      title1="Explora"
      title2="el archivo"
      link="/archivos"
      bgImage={archivo}
      height="455px"/>

      <div className="bottom">
        <div className="image">
          <img src={activismo_img} alt="Imagen de activismo de género"/>
        </div>
        <div className="text">
          <div>
            <h2 className="title">
            El activismo
            </h2>
            <h2 className="title">
            de género
            </h2>
          </div>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla- mcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <p className="paragraph">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feu giat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>


      <Banner
      title1="Explora la línea"
      title2="de tiempo"
      link="/activismo"
      bgImage={linea_tiempo}
      height="455px"/>

      <Footer/>

    </div>
  );
}

export default App;
