import React from 'react';
import CardColections from './cardcolections';

function ListaColections({ colections }) {
  return (
    <div>
      {colections.map((colections) => (
        <CardColections
          key={colections.id}
          Colections={colections}
        />
      ))}
    </div>
  );
}

export default ListaColections;