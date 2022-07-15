import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return <div className="App">
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/beers"
        element={<Beers />}
      />

      <Route
        path="/beers/:beerId"
        element={<BeerDetails />}
      />

      <Route
        path="/random-beer"
        element={<RandomBeer />}
      />

    </Routes>
  </div>;
}

export default App;
