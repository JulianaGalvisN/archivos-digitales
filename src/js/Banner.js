import React from 'react'
import '../css/Banner.css';
import { Link } from 'react-router-dom'

function Banner(props) {
  const imageUrl = `url(${props.bgImage})`
  return (
    <div className="{ props.margin ? Banner margin : Banner}" style={{ backgroundImage: imageUrl, height: props.height, color: props.color,}}>
      <h2 className="title">
        { props.title1 }
      </h2>
      <h2 className="title">
        { props.title2 }
      </h2>
      { props.link ? <Link to={props.link} className="link"><h2 className="title">aquí</h2></Link> : <p>&nbsp;</p>}
    </div>
  )
}

export default Banner;
