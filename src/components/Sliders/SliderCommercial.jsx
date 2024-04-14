import React from "react";
import SliderImages from "./SliderImages";
import "./sliderStyles.css";

const SliderCommercial = () => {
  // Array con 4 imágenes y sus descripciones
  const images = [
    { src: "/images/bolsa-de-compra.svg", alt: "Imagen 1" },
    { src: "/images/fire-icon.svg", alt: "Imagen 2" },
    { src: "/images/shopping-cart.svg", alt: "Imagen 3" },
    { src: "/images/tarjeta-de-credito.svg", alt: "Imagen 4" },
  ];


  return (
    <div className="">
      <SliderImages images={images} />
        
    </div>
  );
};

export default SliderCommercial;
