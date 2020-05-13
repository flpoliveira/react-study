import React from 'react';

function TechItem({ pais, onDelete }) {
  return (
    <li>
      {pais}
      <button onClick={ onDelete } type="button">Remover</button>
    </li>
  );
}

export default TechItem