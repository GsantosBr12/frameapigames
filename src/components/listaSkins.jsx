import React from 'react';
import CardSkins from './cardSkins';

function ListaSkins({ skins }) {
  return (
    <div>
      {skins.map((skins) => (
        <CardSkins
          key={skins.id}
          Skins={skins}
        />
      ))}
    </div>
  );
}

export default ListaSkins;