
import React from "react";
import SliderImages from "./SliderImages";
import "./sliderStyles.css";

const SliderCommercial = ({ images }) => { // Recibe el array como props
  return (
    <div className="">
      <SliderImages images={images} />
    </div>
  );
};

export default SliderCommercial;
