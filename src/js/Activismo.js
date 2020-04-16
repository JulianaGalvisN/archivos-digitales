import React from 'react';
import Banner from './Banner';
import Dropdown from './Dropdown';
import Archivo from './Archivo';
import Popup from './Popup';
import activismo from '../images/activismo.png';
import lupa from '../images/lupa.svg';
import '../css/activismo.css';

const DB_URL =
  'https://script.googleusercontent.com/a/macros/randommonkey.io/echo?user_content_key=r_LlTdFIjSox2kwx0c-SHFJl8b_USSoUsov4azu48CN4hTM-GRYyNXHE84bYyEJ1FzBbf6a0g36u66YQmLrTN0ij7ra88Ui0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_F5M49av5jvMSEjbmACM01ubd_SaoYEJGgJfG4ynUykGlTovx4MdMsA_WKI32lApbywmIdVFRtWnWm9nNiWBhNB67k26AQb74G48i-EPPuBtz9Jw9Md8uu&lib=MGUgqta0UWIajlw18Y2HXqcPNf_ntfMqG';

class Activismo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      tags: null,
      tag: {
        uid: '',
        label: 'Todos',
      },
      activists: null,
      query: '',
      visiblePopup: false,
      selectedActivist: null,
    };
  }

  async componentDidMount() {
    // Esto es de React
    const response = await fetch(DB_URL);
    const { data } = await response.json();
    const tags = data['diccionario-tags'].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    this.setState((state) => ({
      data,
      tags,
      activists: data.activistas_y_organizaciones.filter((activist) => {
        const matches = activist.nombre.toLowerCase().includes('');
        const hasTag = activist.tags.includes(state.tag.uid);
        return matches && hasTag;
      }),
    }));
  }

  filterActivists = (uid, nombre) => {
    // Esto es propio
    this.setState((state) => ({
      tag: {
        uid,
        label: nombre,
      },
      activists: state.data.activistas_y_organizaciones.filter((activist) => {
        const matches = activist.nombre
          .toLowerCase()
          .includes(state.query.toLowerCase());
        const hasTag = activist.tags.includes(uid);
        return matches && hasTag;
      }),
    }));
  };

  search = (event) => {
    const query = event.target.value.trim();
    this.setState((state) => ({
      query,
      // This code is replicated everywhere. Not good
      activists: state.data.activistas_y_organizaciones.filter((activist) => {
        const matches = activist.nombre
          .toLowerCase()
          .includes(query.toLowerCase());
        const hasTag = activist.tags.includes(state.tag.uid);
        return matches && hasTag;
      }),
    }));
  };

  showArchivePopup = (activist) => {
    this.setState(() => ({ visiblePopup: true, selectedActivist: activist }));
  };

  closePopup = () => {
    this.setState(() => ({ visiblePopup: false, selectedActivist: null }));
  };

  render() {
    return (
      <div className="activismo">
        {this.state.visiblePopup && (
          <Popup>
            <h2>{this.state.selectedActivist.nombre}</h2>
            <p>
              {this.state.selectedActivist.lugar}
            </p>
            <h3>Descripción</h3>
            <p>{this.state.selectedActivist.descripcion}</p>
            <button onClick={this.closePopup}>Cerrar</button>
          </Popup>
        )}
        <Banner
          title1="Activismo"
          title2="de mujeres y LGBT"
          bgImage={activismo}
          height="350px"
          margin="Banner margin"
        />

        <div className="paragraph">
          <p>
            Para conocer un poco sobre el activismo de mujeres y LGBT en
            Colombia, te invitamos a conocer la línea de tiempo de hechos
            históricos importantes en Colombia.
          </p>
          <p>
            Si quieres explorar una lista de activistas de mujeres y LGBT, te
            invitamos a filtrar por tema o utilizar la barra buscadora.
          </p>
          <p>
            Si deseas cambiar, adicionar o quitar información de esta sección
            por favor comunícate al correo julianagalvisn@gmail.com
          </p>
          <p>Para acceder a la base de datos completa, puedes dar click</p>
          <a
            href="https://docs.google.com/spreadsheets/d/1rycxptkQFpQQaPsWwVcSqAvqu7LqnqA85XtT3RMPcGI/edit?usp=sharing"
            className="link"
          >
            Aquí
          </a>
        </div>
        <div className="filtros">
          {this.state.tags && (
            <Dropdown
              name="Tema"
              options={this.state.tags}
              selected={this.state.tag.label}
              onUpdate={this.filterActivists}
            />
          )}
          <div className="searchbar">
            <p className="name">Búsqueda</p>
            <div className="bar">
              <input
                type="text"
                id="search"
                name="search"
                onChange={this.search}
              />
              <div className="icon">
                <img className="image" src={lupa} alt="Ícono de lupa" />
              </div>
            </div>
          </div>
        </div>
        <div className="results">
          <h2 className="title-results">Resultados</h2>
          {this.state.activists && (
            <p>Viendo {this.state.activists.length} activistas</p>
          )}
          <div className="archivos-container">
            {this.state.activists ? (
              this.state.activists.map((activist) => {
                return (
                  <Archivo
                    title={activist.nombre}
                    author=""
                    description={activist.descripcion}
                    key={activist.uid}
                    showArchivePopup={() => this.showArchivePopup(activist)}
                  />
                );
              })
            ) : (
              <p>Cargando</p>
            )}
          </div>
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
}

export default Activismo;
