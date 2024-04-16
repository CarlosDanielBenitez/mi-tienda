import React from "react";
import useSlider from "./useSlider";
import "./sliderStyles.css";

const SliderImages = ({ images }) => {
  const { currentIndex } = useSlider(0, images);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "slider-image active"
                : "slider-image hidden"
            }
          >
            <img src={image.src} alt={image.alt} />
            <div className="text-box">
              <h2 className="image-text">{image.title}</h2>
              {/* Agrega el texto dentro de la imagen */}
              <h4 className="image-text-first">{image.description}</h4>
              {/* Agrega el texto dentro de la imagen */}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderImages;
