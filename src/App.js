import React,{useCallback} from 'react';
import './App.css';
import Card from './grid/card';
import HeadBar from "./header/headbar";
import Navbar from "./header/navbar";
import {SliderData} from "./data/SliderData";
function App() {
    return (
    <>
    <Navbar/>   
    <HeadBar/>
    <Card sliderData={SliderData}/> 
    </>
  );
}

export default App;
