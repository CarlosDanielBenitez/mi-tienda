import React from "react";
import "./footer.css"; // Archivo de estilos para el Footer

const Footer = () => {
  return (
    <footer className="footer">
        <div className="column watch">
        <div className="text-section mi-tienda">
          <h1>Mi Tienda</h1>
        </div>
      </div>
      <div className="column">
        <div className="text-section-nosotros">
          <p>CONDICIONES</p>
          <p>TRABAJA CON NOSOTROS</p>
          <p>MEDIOS DE PAGO</p>
          <p>PREGUNTAS FRECUENTES</p>
          <button>BOTÓN DE ARREPENTIMIENTO</button>
        </div>
        <div className="image-section-nosotros">
          <h2>Powered by Pierce commerce</h2>
          <img src="../../../public/images/pierce.svg" alt="Imagen 1" />
          <img src="../../../public/images/vtex.svg" alt="Imagen 2" />
        </div>
      </div>
      <div className="column hidden">
        <div className="text-section mi-tienda">
          <h1>Mi Tienda</h1>
        </div>
      </div>
      <div className="column box-data-global">
        <div className="box-sucursales">
          <img src="../../../public/images/location-icon.svg" alt="Imagen 5" />
          <p>SUCURSALES</p>
        </div>
        <div className="text-section">
          <div className="box-info">
            <p>Whatsapp 2215137270 </p>
            <p>ecommerce@mateu.com.ar</p>
            <p>La Plata 1900, Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="image-section-data">
          <h2>© 2023 MateuSports</h2>
          <img src="../../../public/images/fiscal-qr.jfif" alt="Imagen 6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
