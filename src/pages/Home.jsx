import React from "react";
import SliderCommercial from "../components/Sliders/SliderCommercial";
import SliderData from "../data/SliderData"; // Importa el componente SliderData
import "../components/Sliders/sliderStyles.css"
const Home = () => {
  return (
    //? config mas adelante div Home
    <div className="homeSliderGlobal">
      {/* Utiliza los arrays de SliderData */}
      <SliderCommercial  images={SliderData.images} />
      <div className="homeSliderSneaker">
        <h1>VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>
      <SliderCommercial  images={SliderData.imgSneaker} />
      </div>
      <div className="homeSliderServices">
        <h1>SERVICIOS </h1>
        {/* AQUI AGREGAR SLIDERCOMERCIAL EL SLIDER SERVICES VAMOS A PONER NUEVAS PERSONALIZACIONES. */}
    
      </div>
    </div>
  );
};

export default Home;
