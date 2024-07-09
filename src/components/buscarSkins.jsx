import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Skinsdb from '../../public/skins.json'; // Importa o arquivo JSON local
import ListaSkins from './listaSkins'

const SearchPageSkins = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Filtra os dados do arquivo JSON local com base no termo de busca
    const results = Skinsdb.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
      <ListaSkins Skins={item} />
    </div>
  );
};

export default SearchPageSkins;
