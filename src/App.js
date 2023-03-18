import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import CountryDetail from './pages/CountryDetail/CountryDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrydetail/:name" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
