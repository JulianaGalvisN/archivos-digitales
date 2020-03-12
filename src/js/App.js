import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/reset.css';
import linea_tiempo from '../images/linea_tiempo.png'
import archivo from '../images/archivo.png'


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
