import React from "react";
import "./productCard.css";
const ProductCard = ({ product, onAddToCart }) => {
  const { src, alt, title, description } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    
    <div className="product-card-container">
      <div className="product-card">
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p>$ {description}</p>
        <button onClick={handleAddToCart}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
