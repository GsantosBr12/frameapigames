import React, { useState } from 'react';
import { fetchStikers } from './services/apistikers';
import ListaStikers from "./components/listaStikers"
import Header from "./content/header"


const stikers = () => {

  const [Stikers, setStikers] = useState([]);

  const carregaStikers = async () => {
    try {
      const dadosStikers = await fetchStikers();
      setStikers(dadosStikers);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  }

  return (
    <>
    <Header />
    <div >
        
      <h1>LISTA DE Skins</h1>
      <button onClick={carregaStikers}>Carregar Stikers</button>
      <div >
        <div >
          <ListaStikers stikers={Stikers}  />
        </div>
      </div>
    </div>
    </>
  )
}

export default stikers;
