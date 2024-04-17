import React from "react";
import SliderCommercial from "../components/Sliders/SliderCommercial";
import SliderData from "../data/SliderData"; // Importa el componente SliderData
import "../components/Sliders/sliderStyles.css";
import "../components/Sliders/SliderCategories/sliderCategories.css";
import "../components/Sliders/SliderServices/sliderServices.css";
import ProductSlider from "../components/Sliders/SliderProducts/ProductSlider";
import ProductsData from "../data/ProductsData";
import SliderBestSellers from "../components/Sliders/SliderBestSellers/SliderBestSellers";
import "./home.css"
const Home = () => {
  return (
    //? config mas adelante div Home
    <div className="homeSliderGlobal">

      <div className="homeSliderGlobal">
        <SliderCommercial images={SliderData.images} />
      </div>
      <div className="homeSliderProductStrends">
        <ProductSlider products={ProductsData} />
      </div>
      <div className="homeSliderSneaker">
        <div className="titulados-containers">
          <h1 className="">VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>
        </div>
        <SliderCommercial images={SliderData.imgSneaker} />
      </div>
      <div className="homeSliderProductsBestSellers">
        <SliderBestSellers products={ProductsData} />
      </div>
      <div id="homeServicesAlls" className="homeSliderServices">
        <SliderCommercial images={SliderData.services} />
      </div>
      <div className="flex-services">
        <div className="flex-cartera">
          <img src="../../public/images/bolsa-de-compra.svg" alt="" />
          <h2>Elegí los productos que vas a comprar.</h2>
          <h3>Si querés más de uno, sumalos a tu carrito.</h3>
        </div>
        <div className="flex-tarjeta">
          <img src="../../public/images/bolsa-de-compra.svg" alt="" />
          <h2>Pagá con el medio de pago que quieras.</h2>
          <h3>Comprá con seguridad: usamos la tecnología de Mercado Pago.</h3>
        </div>
        <div className="flex-logistica">
          <img src="../../public/images/bolsa-de-compra.svg" alt="" />
          <h2>Recibí el producto que esperás</h2>
          <h3>
            Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu
            entrega con Mercado Envíos.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
