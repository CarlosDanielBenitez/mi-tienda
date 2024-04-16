import React, { useState, useEffect } from "react";
import ProductCard from "../../card/ProductCard";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  // Efecto para cambiar automáticamente los slides
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para cambiar al slide correspondiente al hacer clic en un punto de paginación
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {products.map((product, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slider-image active" : "slider-image hidden"}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {products.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
