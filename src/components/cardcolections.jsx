import React from 'react';

function CardColections({ colection}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={colection.image} alt={` ${colection.crates}, Coleção ${colection.name}`} width="100" />
      <h3>{colection.name}</h3>
    </div>
  );
}

export default CardColections;