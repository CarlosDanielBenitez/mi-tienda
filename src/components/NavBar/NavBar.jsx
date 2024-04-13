import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import "./NavBar.css";
import NavigationCheckIn from "../CheckIn/NavigationCheckIn";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="headerGlobal">
        <nav className="navbar">

          {/* Menú hamburguesa */}
          <div className="titleHambContent">
          <div className="menu-icon closed" onClick={toggleMenu}>
            {isOpen && <h1 className="store-title">Mi Tienda</h1>}
            <Hamburger
              toggled={isOpen}
              direction="right"
              size={12}
              toggledColor="#000"
              />
          </div>
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
            <li className="ofertasContainer">
              <a id="ofertas" href="#ofertas">
                Ofertas
              </a>
              <img src="../../../public/images/fire-icon.svg" alt="fire-icon" />
            </li>
          </ul>
        </nav>

        {/* Condición para mostrar o no NavigationCheckIn */}
        {!isOpen && (
          <div className="navigationCheckInAll">
            <h1 className="store-title">Mi Tienda</h1>
            <NavigationCheckIn />
            <img src="../../../public/images/shopping-cart.svg" alt="shopping-cart" />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
