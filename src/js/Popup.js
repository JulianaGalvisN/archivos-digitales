import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Popup.css';

const Popup = (props) => {
  return ReactDOM.createPortal(
    <div className="popup-wrapper">
      <div className="popup-content">{props.children}</div>
    </div>,
    document.getElementById('popup')
  );
};

export default Popup;
