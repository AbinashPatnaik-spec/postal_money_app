import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Transact from "./components/Transact";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="MPostal" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
