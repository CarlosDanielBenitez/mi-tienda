import React from "react";
import SliderCommercial from "../components/Sliders/SliderCommercial";
import SliderData from "../data/SliderData"; // Importa el componente SliderData
import "../components/Sliders/sliderStyles.css"
const Home = () => {
  return (
    //? config mas adelante div Home
    <div className="sliderHome">
      {/* Utiliza los arrays de SliderData */}
      <SliderCommercial  images={SliderData.images} />
      <SliderCommercial  images={SliderData.imgSneaker} />
    </div>
  );
};

export default Home;
