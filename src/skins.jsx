import React, { useState } from 'react';
import { fetchSkins } from './services/apiSkins';
import ListaSkins from "./components/listaSkins"


const skins = () => {

  const [Skins, setSkins] = useState([]);

  const carregaSkins = async () => {
    try {
      const dadosSkins = await fetchSkins();
      setSkins(dadosSkins);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  }

  return (
    <div >
        
      <h1>LISTA DE Skins</h1>
      <button onClick={carregaSkins}>Carregar Skins</button>
      <div >
        <div >
          <h2>Todas as Skins</h2>
          <ListaSkins skins={Skins}  />
        </div>
      </div>
    </div>
  )
}

export default skins;
