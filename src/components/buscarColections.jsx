import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Colections from '../../public/colections.json';

const SearchPageColections = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Filtra os dados do arquivo JSON local com base no termo de busca
    const results = Colections.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Pagina de busca</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPageColections;
