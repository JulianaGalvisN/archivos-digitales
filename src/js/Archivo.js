import React from 'react';
import '../css/Archivo.css';

const truncate = (str, len = 140) => {
  if (str.length <= len) {
    return str;
  }
  return str.slice(0, len) + '...';
};

function Archivo(props) {
  return (
    <div className="archivo">
      <div className="content">
        <h2 className="title-archivo">{props.title}</h2>
        <p className="author">{props.author}</p>
        <p className="description">{truncate(props.description)}</p>
      </div>
      <button
        className="button"
        style={{ width: '100%', border: 'none' }}
        onClick={props.showArchivePopup}
      >
        Explorar
      </button>
    </div>
  );
}

export default Archivo;
