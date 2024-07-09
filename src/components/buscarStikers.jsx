import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Stikers from '../../public/stikers.json';


const SearchPageStikers = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Filtra os dados do arquivo JSON local com base no termo de busca
    const results = Stikers.filter(item =>
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

export default SearchPageStikers;
