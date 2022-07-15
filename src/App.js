import './App.css';
import Home from './pages/Home';
// eslint-disable-next-line 
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return <div className="App">
  <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  </div>;
}

export default App;
