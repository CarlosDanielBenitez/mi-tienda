
import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
// Importamos el componente Spin de hamburger-react
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Menú hamburguesa */}
      <div className="menu-icon closed" onClick={toggleMenu}>
        {isOpen && <h1 className="store-title">Mi Tienda</h1>}
        <Hamburger
          toggled={isOpen}
          direction="right"
          size={12}
          toggledColor="#000"
        />
        
      </div>
      {/* Menú de navegación */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#muebles">Muebles</a>
        </li>
        <li>
          <a href="#calzados">Calzados</a>
        </li>
        <li>
          <a href="#colchones">Colchones</a>
        </li>
        <li>
          <a href="#herramientas">Herramientas</a>
        </li>
        <li>
          <a id="ofertas" href="#ofertas">Ofertas</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
