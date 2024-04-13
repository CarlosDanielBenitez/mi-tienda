import React from "react";

const NavBarLargeScreen = () => {
  return (
    <nav className="navbar-large">
      <ul className="nav-links">
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
          <a id="ofertas" href="#ofertas">Ofertas</a>
          <img src="../../../public/images/fire-icon.svg" alt="fire-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLargeScreen;
