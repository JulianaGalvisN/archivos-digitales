import React from 'react'
import '../css/Dropdown.css'

function Dropdown(props) {
  return (
  <div className="dropdown">
    <p className="name">{props.name}</p>
    <div className="menu">
    {/* Esto hay que modificarlo para que sea un dropdown */}
      <p className="options">{props.options}</p>
    </div>
  </div>
  )
}

export default Dropdown;
