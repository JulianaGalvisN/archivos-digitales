import React from 'react';
import MarkdownIt from 'markdown-it';
import Banner from './Banner';
import Archivo from './Archivo';
import Dropdown from './Dropdown';
import Popup from './Popup';
import archivo from '../images/bannernuevo-09.png';
import lupa from '../images/lupa.svg';
import '../css/Archivos.css';

const md = new MarkdownIt();

const DB_URL =
  'https://script.googleusercontent.com/a/macros/randommonkey.io/echo?user_content_key=r_LlTdFIjSox2kwx0c-SHFJl8b_USSoUsov4azu48CN4hTM-GRYyNXHE84bYyEJ1FzBbf6a0g36u66YQmLrTN0ij7ra88Ui0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_F5M49av5jvMSEjbmACM01ubd_SaoYEJGgJfG4ynUykGlTovx4MdMsA_WKI32lApbywmIdVFRtWnWm9nNiWBhNB67k26AQb74G48i-EPPuBtz9Jw9Md8uu&lib=MGUgqta0UWIajlw18Y2HXqcPNf_ntfMqG';

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
        label: 'Todos',
      },
      archives: null,
      query: '',
      visiblePopup: false,
      selectedArchive: null,
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
      archives: data.archivo_existente.filter((archive) => {
        const matches = archive.nombre.toLowerCase().includes('');
        const hasTag = archive.tags.includes(state.tag.uid);
        return matches && hasTag;
      }),
    }));
  }

  filterArchives = (uid, nombre) => {
    // Esto es propio
    this.setState((state) => ({
      tag: {
        uid,
        label: nombre,
      },
      archives: state.data.archivo_existente.filter((archive) => {
        const matches = archive.nombre
          .toLowerCase()
          .includes(state.query.toLowerCase());
        const hasTag = archive.tags.includes(uid);
        return matches && hasTag;
      }),
    }));
  };

  search = (event) => {
    const query = event.target.value.trim();
    this.setState((state) => ({
      query,
      // This code is replicated everywhere. Not good
      archives: state.data.archivo_existente.filter((archive) => {
        const matches = archive.nombre
          .toLowerCase()
          .includes(query.toLowerCase());
        const hasTag = archive.tags.includes(state.tag.uid);
        return matches && hasTag;
      }),
    }));
  };

  showArchivePopup = (archive) => {
    this.setState(() => ({ visiblePopup: true, selectedArchive: archive }));
  };

  closePopup = () => {
    this.setState(() => ({ visiblePopup: false, selectedArchive: null }));
  };

  render() {
    return (
      <div className="archivos">
        {this.state.visiblePopup && (
          <Popup>
            <h2 className="name">{this.state.selectedArchive.nombre}</h2>
            <p className="author">
              {this.state.selectedArchive['autor-organizacion']}
              {this.state.selectedArchive.lugar ? ' - ' : ''}
              {this.state.selectedArchive.lugar}
            </p>
            <h3 className="subtitle">Descripción</h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: md.render(this.state.selectedArchive.descripcion),
              }}
            ></div>
            <h3 className="subtitle">¿Cómo acceder a la información?</h3>
            {/* Will this be markdown formatted text? */}
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: md.render(
                  this.state.selectedArchive['como-acceder-informacion']
                ),
              }}
            ></div>
            <a
              href={this.state.selectedArchive['url']}
              target="_blank"
              rel="noopener noreferrer"
              className="button url"
            >
              Ir al archivo
            </a>
            <button onClick={this.closePopup} className="button">
              Cerrar
            </button>
          </Popup>
        )}
        <Banner upperTitle="Los" lowerTitle="archivos" bgImage={archivo} />

        <div className="headline-left">
          <div className="paragraph">
            <p>
              En esta sección puedes encontrar los archivos digitales existentes
              en Colombia. Es posible filtrar por tema o utilizar la barra
              buscadora.
            </p>
            <p>
              Al dar click al botón "explorar" es posible conocer cómo acceder a
              la información en cada uno.
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
        </div>

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
                    key={archive.uid}
                    showArchivePopup={() => this.showArchivePopup(archive)}
                  />
                );
              })
            ) : (
              <p>Cargando</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Archivos;
