import './App.css';
import React from 'react';
import { useState } from 'react';
import waldo from './components/waldo.jpg'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

function App() {





const placeCharacters = ( event ) => {
  let bounds = event.target.getBoundingClientRect();
  //These needed to change
  let storedwidthx = 1440
  let storedheighty = 3120

  let storedstickx = 920
  let storedsticky = 1478.5

  let storedfoxx = 172
  let storedfoxy = 1338

  //These can stay the same. Above needs to change.
  let storedxvalue = 970
  let storedyvalue = 1869

  let xwindow = bounds.width
  let ywindow = bounds.height

  let newx = (storedxvalue * xwindow) / storedwidthx
  let newy = (storedyvalue * ywindow) / storedheighty


  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;

//To achieve correct %'s
//It should be (Old X value * New Image Width) / (Old Image Width)
//The Problem gets fixed when we use BOTH WIDTHS FROM THE IMAGE/EVENT BOUNDING CLIENT. WIDTH AND HEIGHT
//The reason we kept getting a problem is because the window is different from the image and the height value would never change

  console.log(x, y)
  console.log(newx, newy)

}












//window.addEventListener('resize', relativeCoords)


  return (
    <div className="App" >
        <div className='container' >
            <div className='mini-container' >
              <div className='header'>Header</div>
              <img src={waldo} onClick={placeCharacters} ></img>
            </div>
        </div>
    </div>
  );
}

export default App;


