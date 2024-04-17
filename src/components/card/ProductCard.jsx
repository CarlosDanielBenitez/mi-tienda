import React from "react";
import "./productCard.css";

const ProductCard = ({ product, currentIndex, setCurrentIndex, totalSlides }) => {
  const { src, alt, title, description } = product;

  const handleAddToCart = () => {
    // Agrega aquí la lógica para añadir al carrito si es necesario
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`product-card-container ${currentIndex === 0 ? "active" : ""}`}>
      <div className={`product-card ${currentIndex === 0 ? "active" : ""}`}>
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p>$ {description}</p>
        <button onClick={handleAddToCart}>Comprar</button>
      </div>
      {currentIndex === 0 && (
        <div className="prev-arrow" onClick={handlePrevSlide}>
          {"<"}
        </div>
      )}
      {currentIndex === totalSlides - 1 && (
        <div className="next-arrow" onClick={handleNextSlide}>
          {">"}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
