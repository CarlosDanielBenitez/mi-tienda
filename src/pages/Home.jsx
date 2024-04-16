import React from "react";
import SliderCommercial from "../components/Sliders/SliderCommercial";
import SliderData from "../data/SliderData"; // Importa el componente SliderData
import "../components/Sliders/sliderStyles.css"
import "../components/Sliders/SliderCategories/sliderCategories.css"
import "../components/Sliders/SliderServices/sliderServices.css";
import ProductSlider from "../components/Sliders/SliderProducts/ProductSlider";
import ProductsData from "../data/ProductsData";
import SliderBestSellers from "../components/Sliders/SliderBestSellers/SliderBestSellers";

const Home = () => {
  return (
    //? config mas adelante div Home
    <div className="homeSliderGlobal">
      {/* Utilizar los arrays de SliderData */}
      <div className="homeSliderGlobal">
      <SliderCommercial  images={SliderData.images} />
      </div>
      <div className="homeSliderProductStrends">   
        <ProductSlider products={ProductsData}/>
      </div>
      <div className="homeSliderSneaker">
        <h1>VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>
      <SliderCommercial  images={SliderData.imgSneaker} />
      </div>
      <div className="homeSliderProductsBestSellers">   
        <SliderBestSellers products={ProductsData}/>
      </div>
      <div className="homeSliderServices">
      <SliderCommercial  images={SliderData.services} />
      </div>
    </div>
  );
};

export default Home;
