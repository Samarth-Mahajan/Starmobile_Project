import React from 'react';

const SortDropdown = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="none">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortDropdown;