// SliderImages.js
import useSlider from "./useSlider";
import "./sliderStyles.css";

const SliderImages = ({ images }) => {
  const { currentIndex } = useSlider(0, images);

  return (
    <div className="slider-container" >
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={
              index === currentIndex ? "slider-image active" : "slider-image hidden"
            }
          />
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
