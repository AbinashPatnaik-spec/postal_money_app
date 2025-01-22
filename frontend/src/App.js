import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import User from './components/User';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar title="MPostal" />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/money' element={<User />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
