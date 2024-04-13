import React from "react";
import NavBar from "./components/NavBar/NavBar";
import CheckIn from "./components/CheckIn/CheckIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
         
          <Route path="/" element={<CheckIn />} />
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
