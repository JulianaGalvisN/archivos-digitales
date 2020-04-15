import React from 'react';
import Banner from './Banner';
import '../css/activismo.css';
import activismo from '../images/activismo.png';

function Activismo(props) {
  return (
    <div className="activismo">
      <Banner
        title1="Activismo"
        bgImage={activismo}
        height="350px"
        margin="Banner margin"
      />

      <div className="paragraph">
        <p>
          Para conocer las activistas de género existentes en Colombia puedes
          explorar la siguiente base de datos. Y para conocer las causas que se
          han defendido en torno al género en el país, explora la línea de
          tiempo.
        </p>
      </div>

      <iframe
        title="Timeline"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1XNkzcy7NfNLeE6pEY50m2-PynjeAdBJxFQw0-I_HaWs&font=Default&lang=en&initial_zoom=2&height=650"
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Activismo;
