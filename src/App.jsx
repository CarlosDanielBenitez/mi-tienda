import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import CheckIn from "./components/CheckIn/CheckIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarLargeScreen from "./components/NavBar/NavBarLargeScreen";

const App = () => {
  return (
    <Router>
      {/* <div className="headerGlobal"> */}
      
      <NavBar />
     
      {/* </div> */}
      <NavBarLargeScreen />
      <Routes>
        <Route path="/CheckIn" element={<CheckIn />} />
        {/* Agrega rutas para otras secciones */}
        <Route path="/muebles" element={<Muebles />} />
      </Routes>
    </Router>
  );
};





const Muebles = () => (
  <div>
    <h1>Muebles</h1>
    {/* Contenido de la página de muebles */}
  </div>
);

export default App;
