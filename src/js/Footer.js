import React from 'react';
import logo from '../images/logo_footer.svg';
import cc from '../images/cc.svg';
import tw from '../images/tw.svg';
import mail from '../images/mail.svg';
import fb from '../images/fb.svg';
import '../css/Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <img src={logo} className="logo item" alt="Logo de Archivos digitales" />
      <div className="item share">
        <p>Comparte</p>
        <a className="icon" href="www.twitter.com" alt="ícono de twitter">
          <img src={tw} alt="Twitter logo" />
        </a>
        <a
          className="icon"
          href="www.correo.com"
          alt="ícono de un correo electrónico"
        >
          <img src={mail} alt="Email icon" />
        </a>
        <a className="icon" href="www.facebook.com" alt="ícono de Facebook">
          <img src={fb} alt="Facebook logo" />
        </a>
      </div>
      <div className="item credits">
        <p>
          Este sitio fue realizado por Juliana Galvis en el marco de la maestría
          en Humanidades Digitales en la Universidad de los Andes. Diseño web
          por Mariana Villamizar.
        </p>
      </div>
      <div className="item cc">
        <img src={cc} className="icon" alt="Logo de Creatve Commons CC-BY-SA" />
        <p>
          Todo el material en esta página, cuando no se indique lo contrario, es
          CC-BY-SA. Si reúsas o adaptas recursos de esta página por favor
          vincúlalos.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
