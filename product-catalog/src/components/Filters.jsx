import React from 'react';

const Filters = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange,
  minPrice,
  maxPrice 
}) => {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    const newMinPrice = Number(e.target.value);
    setPriceRange([newMinPrice, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = Number(e.target.value);
    setPriceRange([priceRange[0], newMaxPrice]);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      
      <div className="filter-section">
        <h3>Category</h3>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <div>
            <label htmlFor="min-price">Min:</label>
            <input
              id="min-price"
              type="number"
              min={minPrice}
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={handleMinPriceChange}
            />
          </div>
          <div>
            <label htmlFor="max-price">Max:</label>
            <input
              id="max-price"
              type="number"
              min={priceRange[0]}
              max={maxPrice}
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="price-slider">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="price-range-display">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>
    </div>
  );
};

export default Filters;