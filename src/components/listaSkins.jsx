import React from 'react';
import CardSkins from './cardSkins';
import Skinsdb from '../../public/skins.json'

function ListaSkins({ skins }) {
  return (
    <div>
      {Skinsdb.map(skins => (
        <CardSkins
          key={skins.id}
          skins={skins.name}
        />
      ))}
    </div>
  );
};


export default ListaSkins;