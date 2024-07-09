import React from 'react';

function CardStikers({ stikers}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={stikers.image} alt={` ${stikers.type}, Adesivo ${stikers.name}`} width="100" />
      <h3>{stikers.name}</h3>
      <p>Raridade: {stikers.rarity.name.toLocaleString()}</p>
    </div>
  );
}

export default CardStikers;