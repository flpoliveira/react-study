import React from 'react';
import PropTypes from 'prop-types';


function TechItem({ pais, onDelete }) {
  return (
    <li>
      {pais}
      <button onClick={ onDelete } type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  pais: 'Oculto' 
};

TechItem.PropTypes ={
  pais: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem