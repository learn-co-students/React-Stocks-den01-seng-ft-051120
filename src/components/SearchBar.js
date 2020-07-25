import React from 'react';

const SearchBar = ({ alpha, price, filter }) => {

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={alpha} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={price} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
