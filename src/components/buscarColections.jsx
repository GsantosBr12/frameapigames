import React, { useState } from 'react';
import SearchBar from './SearchBar';
import colectionsdb from '../../public/colections.json'; // Importa o arquivo JSON local
import Header from "../content/header"
import ListaColections from './listaColection';

const SearchPageColections = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Filtra os dados do arquivo JSON local com base no termo de busca
    const results = colectionsdb.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header />
      <h1>Buscar Coleções</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}><img src="" alt="" />{result.name}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default SearchPageColections;

