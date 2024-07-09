import React from 'react';

function CardSkins({ skins}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={skins.image} alt={` ${skins.category.name}, Skin ${skins.name}`} width="100" />
      <h3>{skins.name}</h3>
      <p>Raridade: {skins.rarity.name.toLocaleString()}</p>
    </div>
  );
}

export default CardSkins;
