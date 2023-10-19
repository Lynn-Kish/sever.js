import React, { useState } from 'react';

function SearchCyclists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('');

  const handleSearch = () => {
    // Implement search functionality or call an API to search for cyclists
    console.log(`Searching for cyclists with term: ${searchTerm} and stage: ${stageFilter}`);
  };

  return (
    <div>
      <h2>Search Cyclists</h2>
      <form>
        <input
          type="text"
          placeholder="Search by name, registration number, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={stageFilter} onChange={(e) => setStageFilter(e.target.value)}>
          <option value="">All Stages</option>
          <option value="Stage 1">Stage 1</option>
          <option value="Stage 2">Stage 2</option>
          <option value="Stage 3">Stage 1</option>
          <option value="Stage 4">Stage 2</option>
          <option value="Stage 5">Stage 1</option>
          <option value="Stage 6">Stage 2</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </form>
      {/* Display search results here */}
    </div>
  );
}

export default SearchCyclists;


