import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Banner.css';

function Banner(props) {
  const imageUrl = `url(${props.bgImage})`;
  return (
    <div className="Banner" style={{ backgroundImage: imageUrl }}>
      <div className="Banner-container">
        <h2 className="Banner-title title">{props.upperTitle}</h2>
        <h2 className="Banner-title title">{props.lowerTitle}</h2>
        {props.link && (
          <Link to={props.link} className="Banner-link">
            aquí
          </Link>
        )}
      </div>
    </div>
  );
}

export default Banner;
