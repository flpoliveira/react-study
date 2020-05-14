import React from 'react';

// import { Container } from './styles';

function Repository({ match }) {
  return (
    <h1>
     Repository {decodeURIComponent(match.params.repository)}
    </h1>
  );
}

export default Repository;
