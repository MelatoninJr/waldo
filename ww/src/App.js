import './App.css';
import React from 'react';
import { useState } from 'react';
import waldo from './components/waldo.jpg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Game from './components/game'


function App() {

const [hoverarray, SetHoverArray] = useState([1])
const [imagearray, SetImageArray] = useState([])






return (
  <HashRouter basename='/'>
    <Routes>
      <Route path='/' element={<Game />} />
    </Routes>
  </HashRouter>
);
}

export default App;


