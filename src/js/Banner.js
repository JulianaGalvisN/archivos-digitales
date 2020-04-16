import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Banner.css';

function Banner(props) {
  const imageUrl = `url(${props.bgImage})`;
  return (
    <div
      className={props.margin}
      style={{
        backgroundImage: imageUrl,
        height: props.height,
        color: props.color,
      }}
    >
      <h2 className="title">{props.title1}</h2>
      <h2 className="title">{props.title2}</h2>
      {props.link ? (
        <Link to={props.link} className="link">
          <h2 className="title">aquí</h2>
        </Link>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  );
}

export default Banner;
