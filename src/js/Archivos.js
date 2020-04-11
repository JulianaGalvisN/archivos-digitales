import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Archivo from './Archivo';
import Dropdown from './Dropdown';
import '../css/Archivos.css';
import archivo from '../images/banner-archivos.png';
import lupa from '../images/lupa.svg';

// Se pasa a un componente de clase
// En componentDidMount se lee la base de datos
// Los archivos se filtran por tags en la funcion filterArchives

class Archivos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      tags: null,
      tag: {
        uid: '',
        label: '',
      },
      archives: null,
    };
  }

  componentDidMount() {
    // Esto es de React
    fetch(
      'https://script.googleusercontent.com/a/macros/randommonkey.io/echo?user_content_key=r_LlTdFIjSox2kwx0c-SHFJl8b_USSoUsov4azu48CN4hTM-GRYyNXHE84bYyEJ1FzBbf6a0g36u66YQmLrTN0ij7ra88Ui0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_F5M49av5jvMSEjbmACM01ubd_SaoYEJGgJfG4ynUykGlTovx4MdMsA_WKI32lApbywmIdVFRtWnWm9nNiWBhNB67k26AQb74G48i-EPPuBtz9Jw9Md8uu&lib=MGUgqta0UWIajlw18Y2HXqcPNf_ntfMqG'
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState((state) => ({
          data: res.data,
          tags: res.data['diccionario-tags'],
          archives: res.data.archivo_existente.filter((archive) => {
            return archive.tags.includes(state.tag.uid);
          }),
        }));
      });
  }

  filterArchives = (uid, nombre) => {
    // Esto es propio
    this.setState((state) => ({
      tag: {
        uid,
        label: nombre,
      },
      archives: state.data.archivo_existente.filter((archive) => {
        return archive.tags.includes(uid);
      }),
    }));
  };

  render() {
    return (
      <div className="archivos">
        <Navbar />

        <Banner
          title1="Los"
          title2="archivos"
          bgImage={archivo}
          height="300px"
          margin="Banner margin"
        />

        <div className="filtros">
          {this.state.tags && (
            <Dropdown
              name="Tema"
              options={this.state.tags}
              selected={this.state.tag.label}
              onUpdate={this.filterArchives}
            />
          )}
          <div className="searchbar">
            <p className="name">Búsqueda</p>
            <div className="bar">
              <input type="text" id="search" name="search" />
              <div className="icon">
                <img className="image" src={lupa} alt="Ícono de lupa" />
              </div>
            </div>
          </div>
        </div>
        <div className="results">
          <h2 className="title-results">Resultados</h2>
          {this.state.archives && (
            <p>Viendo {this.state.archives.length} archivos</p>
          )}
          <div className="archivos-container">
            {this.state.archives ? (
              this.state.archives.map((archive) => {
                return (
                  <Archivo
                    title={archive.nombre}
                    author={archive['autor-organizacion']}
                    description={archive.descripcion}
                    link={archive.url}
                    key={archive.uid}
                  />
                );
              })
            ) : (
              <p>Cargando</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Archivos;
