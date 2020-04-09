import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Activismo.css'

function Activistas(props) {
  return (
  <div className="activistas">
    <div className="content">
      <h2 className="title-archivo">{props.title}</h2>
      <p className="author">{props.author}</p>
      <p className="description">{props.description}</p>
    </div>
    <Link to={props.link}><h2 className="button">Explorar</h2></Link>
  </div>
  )
}

export default Activistas;
