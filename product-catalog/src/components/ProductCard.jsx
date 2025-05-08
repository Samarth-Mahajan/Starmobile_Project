import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price-row">
          <span className="price">${product.price}</span>
          {product.original_price && (
            <span className="original-price">${product.original_price}</span>
          )}
        </div>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;