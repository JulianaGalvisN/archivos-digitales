import React from 'react';
import '../css/Dropdown.css';

// All logic should be implemented by parent component. It could be better
function Dropdown(props) {
  const handleDropdown = function (event) {
    event.currentTarget.classList.toggle('opened');
    const target = event.target;
    if (
      target.matches('.dropdown-option') ||
      target.parentNode.matches('.dropdown-option')
    ) {
      const node = target.matches('.dropdown-option')
        ? target
        : target.parentNode;
      const html = node.innerHTML;
      props.onUpdate(node.dataset.option, html);
    }
  };
  return (
    <div className="dropdown-container">
      <p className="dropdown-name">{props.name}</p>
      <div className="dropdown" onClick={handleDropdown}>
        <div className="dropdown-select">{props.selected || 'Todos'}</div>
        <ul className="dropdown-options">
          <li className="dropdown-option" data-option="">
            Todos
          </li>
          {props.options &&
            props.options.map((option) => (
              <li
                className="dropdown-option"
                key={option.uid}
                data-option={option.uid}
              >
                {option.nombre}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
